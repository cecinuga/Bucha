import { Carousel } from '@mantine/carousel';
import { createStyles, Paper, Progress, rem } from '@mantine/core';
import { useCallback, useEffect, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from "embla-carousel-autoplay"

const useStyles = createStyles(() => ({
  card: {
    height: rem(500),
  },
}));

/*interface Card{
  image: string;
  height? : string
  width?: string
  slide?: number;
  imageHeight?:string;
  i: number
}*/

function Card({ image, height, width, slide, i,imageHeight }) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      radius="md"
      style={{ marginRight:"auto", marginLeft:"auto", height: height, backgroundColor: "transparent" }}
      className={classes.card}
    >
      <img src={image} width={width} height={imageHeight} style={{margin: slide==2?"unset":"auto", padding:i!=-1?"0.5rem":"0"}} />
    </Paper>
  );
}

/*type CarouselFoto= {
    data: {image: string;}[]
    height?: string
    width?: string
    slide?: number
    slideSize?: string
    imageHeight?: string 
}*/

export function CarouselFoto({data, height, width, slide, slideSize, imageHeight, hasOpened}) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openedModal,] = useState(hasOpened)
  const [embla, setEmbla] = useState(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  useEffect(() => {
    setTimeout(() => embla && embla.reInit(), 1000);
  }, [openedModal,hasOpened, embla]);

  const slides = data.map((item, i) => (
    <Carousel.Slide key={item.image}>
      <Card image={item.image} height={height} width={width} slide={slide} i={slide?i:-1} imageHeight={imageHeight}></Card>
    </Carousel.Slide> 
  ));

  return (
    <>
        <Carousel
            getEmblaApi={setEmbla}
            withKeyboardEvents
            withControls
            dragFree
            slideSize={slideSize?slideSize:1}
            slideGap="xl"
            align="start"
            slidesToScroll={slide!=undefined?slide:1}
            >
            {slides}
            </Carousel>
            <Progress
                value={scrollProgress}
                styles={{ bar: { transitionDuration: '0ms', backgroundColor:"red" }, root: { maxWidth: rem(320) } }}
                style={{ bottom:"3rem"}}
                size="sm"
                mt="xl"
                mx="auto"
            />
    </>
  );
}
