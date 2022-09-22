---
nav:
  path: /components
---

# Slider

## Demo

### Default

<code src="./demo/default.tsx"> </code>

### Rectangle

<code src="./demo/rectangle.tsx"> </code>

### Step

<code src="./demo/step.tsx"> </code>

## Props

|   Name   |                Desc                 |         Type          | Default |
| :------: | :---------------------------------: | :-------------------: | :-----: |
|  value   |                                     |        number         |    0    |
|   min    |                                     |        number         |    0    |
|   max    |                                     |        number         |   100   |
|   step   |                                     |        number         |    1    |
|   bar    |           bar child node            |       ReactNode       |    -    |
|  trail   |          trail child node           |       ReactNode       |    -    |
|  handle  |          handle child node          |       ReactNode       |    -    |
| onChange | callback function when value change | (value?:number)=>void |    -    |

<!-- | active  | whether show animation in trail node |  boolean  |         | -->
