# Test task

You need to implement the wine slider with filters using the design and data from json. 

Here is the [Design link](https://www.figma.com/file/hgivuPu9HpDkxWqQunx8vz/Untitled?node-id=0%3A1&t=x0JoJZEahDARlToS-0)

The data required to render the design is under `public/list.json` folder. You need to fetch the data from the client side and render it in the browser. The data looks like this:

```json
[
  {
    "id": "1",
    "name": "Primitivo Puglia",
    "type": "semi-dry"
  }
]
```

The same image from the design can be used for all the items.

The links to the "learn" and "shop" pages of each wine item should lead on url formed by concatenating the `id` of the wine item to the "learn" (`/learn/`) and "shop" (`/shop/`) urls.


## Requirements
- The project is bootstrapped using [Create React App](https://github.com/facebook/create-react-app)
- Implement this design using React and Typescript.
- Forbidden to use bootstrap or ui libraries for styling and grid
- You can use any library for slider


## Bonus Points:
- If you use BEM for classNames naming
