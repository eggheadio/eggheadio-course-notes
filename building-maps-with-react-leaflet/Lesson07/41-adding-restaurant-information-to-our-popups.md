# Adding Restaurant Information to our Popups

**[📹 Video](https://egghead.io/lessons/egghead-adding-restaurant-information-to-our-popups)**

Let's destructure the rest of the information from our data object:

`const { name, delivery, tags, phone, website } = properties;`

In the `setContent` function we are able to display HTML (and not just a simple variable, like `name` that we did previously).

We need to wrap the HTML inside a **template literal** (the backticks ``).

Let's add the following html:

```js
const html = `
          <div">
            <h3>${name}</h3>
            <ul>
              <li>
                ${tags.join(", ")}
              </li>
              <li>
                <strong>Delivery:</strong> ${delivery ? "Yes" : "No"}
              </li>
              <li>
                <strong>Phone:</strong> ${phone}
              </li>
              <li>
                <strong>Website:</strong> <a href="${website}">${website}</a>
              </li>
            </ul>
          </div>
        `;
```
