---
nav:
  path: /components
---

# Carousel

## Demo

### Default

<code src="./demo/default.tsx"> </code>

### Loop

<code src="./demo/loop.tsx"> </code>

### Autoplay

<code src="./demo/autoplay.tsx"> </code>

### Drag Free

<code src="./demo/dragFree.tsx"> </code>

## Props

|   Name    |                       Desc                        |    Type     | Default |
| :-------: | :-----------------------------------------------: | :---------: | :-----: |
| children  |                                                   |  ReactNode  |    -    |
| draggable |        whether can drag even in Slide mode        |   boolean   |  true   |
| dragFree  |               whether can drag free               |   boolean   |  false  |
|   loop    | whether loop, only work when children more than 1 |   boolean   |  false  |
| autoplay  |               whether can autoplay                |   boolean   |  false  |
| interval  |               autoplay interval(ms)               |   number    |  3000   |
|   prev    |                  prev ReactNode                   |  ReactNode  |    -    |
|   next    |                  next ReactNode                   |  ReactNode  |    -    |
|   dots    |                  dots ReactNode                   |  ReactNode  |    -    |
| className |                 wrapper className                 |   string    |   ''    |
|  motion   |                                                   | MotionProps |    -    |

## Reference

|      Name      |                       Link                        |
| :------------: | :-----------------------------------------------: |
|  React Slick   | [React Slick](https://react-slick.neostack.com/)  |
| Embla Carousel | [Embla Carousel](https://www.embla-carousel.com/) |
