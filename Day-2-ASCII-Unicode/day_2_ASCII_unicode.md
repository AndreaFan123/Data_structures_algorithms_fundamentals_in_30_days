# Day 2 : ASCII and Unicode

![day-2](./Day-2.png)

## Table of Contents

- [ASCII](#what-is-ascii)
  - [ASCII Art](#ascii-art)
- [Unicode](#unicode)
  - [UTF-8](#utf-8)
  - [UTF-16](#utf-16)
  - [UTF-32](#utf-32)
  - [Comparison](#comparison)
- [Some examples](#some-practical-examples)
- [Real World Scenarios](#real-world-scenarios)
- [In what scenarios we might need to use methods in JavaScript to convert from one encoding to UTF-8?](#in-what-scenarios-we-might-need-to-use-methods-in-javascript-to-convert-from-one-encoding-to-utf-8)
  - [When we deal with data from backend services that are not encoded in UTF-8](#when-we-deal-with-data-from-backend-services-that-are-not-encoded-in-utf-8)
  - [When dealing the files that are uploaded by users](#when-dealing-the-files-that-are-uploaded-by-users)
  - [Deal with multiple languages in a single application](#deal-with-multiple-languages-in-a-single-application)
  - [Deal with WebSocket data](#deal-with-websocket-data)
  - [Local storage](#local-storage)
  - [Deal with api responses](#deal-with-api-responses)

### What is ASCII?

ASCII stands for **American Standard Code for Information Interchange**

#### ASCII Art

ASCII art is a graphic design technique that uses computers for presentation and consists of pictures pieced together, ASCII art can be created with any text editor, and is often used with free-form languages. Most examples of ASCII art require a fixed-width font (non-proportional fonts, like on a traditional typewriter) such as Courier for presentation.

You can place it into a `HMTL` file, usually in a `<pre>` tag.

```html
<pre>
    █  █  █  █████  █    █   █████
    █  █  █    █    █   █      █ 
    █  █  █    █    ████▄      █
    █  █  █    █    █    █     █
    ███████  █████  █     █  █████
</pre>
```

### Unicode

Unicode, formally the **The Unicode Standard**. It is designed to support the use of text in all the world's writing systems, it is also used to encode the text on the internat, including most web pages.

Unicode text is processed and stored as binary data. The unicode Standard itself defines three encodings:

1. UTF-8
2. UTF-16
3. UTF-32

**UTF-8** is the most widely used encoding due to its compatibility with ASCII.

Let's breaking down each of them:

#### UTF-8

- It is a variable-length character encoding for Unicode.
- It uses 1 (8 bits) to 4 bytes (32 bits) to represent a character.
- It uses the same encoding as ASCII for characters within the ASCII range, any text encoded in ASCII can be used in UTF-8 without any change.

#### UTF-16

- It uses 2 (16 bits) or 4 bytes (32 bits) to represent a character.

#### UTF-32

- It uses 4 bytes (32 bits) to represent a character.

#### Comparison

| Encoding | ASCII Compatible | Variable Length | Size (bytes) |
| -------- | ---------------- | --------------- | ------------ |
| UTF-8    | Yes              | Yes             | 1-4          |
| UTF-16   | No               | Yes             | 2-4          |
| UTF-32   | No               | No              | 4            |

### Some examples

- You may see **UTF-8** in `HTML`:

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>UTF-8 Example</title>
    </head>
    <body>
      ...
    </body>
  </html>
  ```

  `cartset` attribute in the `meta` tag specifies the character encoding for the document, in this example, we basically tell the browser to use `UTF-8` to render the text.

- Web server configuration (Content-Type):

  This is used to indicate the original media type of the resource, in response, a `Content-Type` header provides the client with the actual content type of the returned content, you might have seen this in the response headers of a web page.

  ```javascript
    Content-type: application/json; charset=UTF-8
  ```

  The code above means that the content is a `JSON` file encoded in `UTF-8`.

  > We don't have to specify the carset as `UTF-8` as `JSON` is already encoded in `UTF-8` by default.

### Real World Scenarios:

- Web pages: We have seen this in the `HTML` example above, we use `UTF-8` to render the text on the web page.
- Email: Default encoding for email is `UTF-8`.
- Operating Systems: Most modern operating systems use `UTF-8` as the default encoding.
- Databases: `UTF-8` is the most common encoding for databases.

### In what scenarios we might need to use methods in JavaScript to convert from one encoding to UTF-8?

#### When we deal with data from backend services that are not encoded in `UTF-8`.

```javascript
// Assume the data is encoded in other encoding
const res = await fetch("https://api.example.com/data");

// Convert the data to UTF-8
const data = await res.arrayBuffer();
const decoder = new TextDecoder("UTF-8");
const utf8Data = decoder.decode(data);
```

- `arrayBuffer()` object is used to represent aa generic raw binary data buffer. Check [ArrayBuffer]("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer") on MDN.

- `TextDecoder()` is a decoder for a specific encoding, in this case, we use `UTF-8`. Check [TextDecoder]("https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder") on MDN.
- `TextDecoder.decode()` returns a string containing text decoded from the given `ArrayBuffer`. Check [TextDecoder.decode()](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/decode) on MDN.

#### When dealing the files that are uploaded by users.

```javascript
const file = document.getElementById("file").files[0];
const reader = new FileReader();

reader.onload = function (e) {
  const data = e.target.result;
  const decoder = new TextDecoder("UTF-8");
  const utf8Data = decoder.decode(data);
};

reader.readAsArrayBuffer(file);
```

- `FileReader()` is an object to read the content of files. Check [FileReader]("https://developer.mozilla.org/en-US/docs/Web/API/FileReader") on MDN.
- `FileReader.readAsArrayBuffer()` starts reading the contents of the specified `Blob` or `File`. Check [FileReader.readAsArrayBuffer()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsArrayBuffer) on MDN.

#### Deal with multiple languages in a single application.

```javascript
const data = "你好，世界！";
const encoder = new TextEncoder();
const utf8Data = encoder.encode(data);
```

- `TextEncoder()` is an encoder for a specific encoding, in this case, we use `UTF-8`. Check [TextEncoder](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder) on MDN.
- `TextEncoder.encode()` returns a `Uint8Array` containing the text encoded in the given encoding. Check [TextEncoder.encode()](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder/encode) on MDN.

#### Deal with WebSocket data:

```javascript
const socket = new WebSocket("wss://api.example.com");
socket.onmessage = function (event) {
  const data = event.data;
  const decoder = new TextDecoder("UTF-8");
  const utf8Data = decoder.decode(data);
};
```

- `WebSocket` is a communication protocol that provides full-duplex communication channels over a single `TCP` connection. Check [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) on MDN.

#### Local storage:

```javascript
const data = localStorage.getItem("data");
const decoder = new TextDecoder("UTF-8");
const utf8Data = decoder.decode(data);
```

- `localStorage.getItem()` gets the value of the specified `Storage` object item. Check [localStorage.getItem()](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem) on MDN.

#### Deal with api responses:

```javascript
const res = await fetch("https://api.example.com/data");
const data = await res.arrayBuffer();
const decoder = new TextDecoder("UTF-8");
const utf8Data = decoder.decode(data);
```

- `fetch()` is used to make network requests similar to `XMLHttpRequest`. Check [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) on MDN.
