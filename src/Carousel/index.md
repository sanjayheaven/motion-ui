---
nav:
  path: /components
---

# Carousel

## Demo

### Default

Carousel offers **_prev/next/dots_** slots to self-define the Arrow and Dots part.

<code src="./demo/default.tsx"> </code>

### Draggable

Draggable is a property in Carousel which controls whether components can listen drag event. Default **_true_**.

<code src="./demo/draggable.tsx"> </code>

### Loop

When set **loop** true, there will be two changes.

- When curent page is max page, click **_next_** will go to the first page.
- Will keep the same animation in **_pre/next_** direction when slides change.

<code src="./demo/loop.tsx"> </code>

### Autoplay

Set **_autoplay_** true, component will automatically change the slide, while the **_interval_** is **_3000_** ms in default.

Also, we can set **_loop_** at the same time, then will keep a same animation in a direction.

<code src="./demo/autoplay.tsx"> </code>

### Drag Free

<code src="./demo/dragFree.tsx"> </code>

## Props

|   Name    |                         Desc                          |    Type     | Default |
| :-------: | :---------------------------------------------------: | :---------: | :-----: |
| children  |                                                       |  ReactNode  |    -    |
| draggable |          whether can drag even in Slide mode          |   boolean   |  true   |
| dragFree  |                 whether can drag free                 |   boolean   |  false  |
|   loop    | whether loop, **only** work when children more than 1 |   boolean   |  false  |
| autoplay  |                 whether can autoplay                  |   boolean   |  false  |
| interval  |                 autoplay interval(ms)                 |   number    |  3000   |
|   prev    |                    prev ReactNode                     |  ReactNode  |    -    |
|   next    |                    next ReactNode                     |  ReactNode  |    -    |
|   dots    |                    dots ReactNode                     |  ReactNode  |    -    |
| className |                   wrapper className                   |   string    |   ''    |
|  motion   |                                                       | MotionProps |    -    |

## Reference

|      Name      |                       Link                        |
| :------------: | :-----------------------------------------------: |
|  React Slick   | [React Slick](https://react-slick.neostack.com/)  |
| Embla Carousel | [Embla Carousel](https://www.embla-carousel.com/) |
