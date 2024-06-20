# Day 3 Data Compression

![day-3](./Day-3.png)

## Table of Contents

- [What is Data Compression?](#what-is-data-compression)
- [Types of Data Compression](#types-of-data-compression)
  - [Lossless Compression](#lossless-compression)
  - [Lossy Compression](#lossy-compression-also-called-irreversible-compression)
- [Data compression techniques that are related to frontend development](#data-compression-techniques-that-are-related-to-frontend-development)
  - [Image Compression](#image-compression)
  - [File Compression](#file-compression)
  - [HTTP Compression](#http-compression)

### What is Data Compression?

It is a process of encoding information using fewer bits than the original representation, in short, it is a process of reducing the size of data.

### Types of Data Compression

- Lossless Compression
- Lossy Compression

#### Lossless Compression

It allows the original data to be compressed without losing any information, and it is reversible due to most of the data exhibits **statistical redundancy**.

Statistical redundancy means extra or unnecessary data that can be removed without loss of information. For example in the string "AAAAABBBBCCCCDDDD", the redundancy is the repetition of the same character, so it can be compressed to "A*5B*4C*4D*4", not only we save space, we also maintain the original data.

Techniques used in Lossless Compression:

- Huffman Coding
- Arithmetic Coding

#### Lossy Compression (Also called Irreversible Compression)

It is used to reduce data size for storing, handling and transmitting content. Lossy compression is commonly used to compress multimedia data (audio, video, and images), especially in streaming media and **internet telephony** (Voice over Internet Protocol or IP telephony).

---

### Data compression techniques that are related to frontend development

In order to improve the performance of a website, data compression plays a crucial role, it helps to reduce the size of the data that is being transferred between the server and the client, below are common ways to improve the performance of a website.

#### Image Compression

Images are the most common type of data, we can try to reduce image size, lower the quality of the image or change the format of the image.

- Lossless Compression: It describes a pixel based on the difference from its neighboring pixels, it is used in PNG, GIF, WebP and AVIF.
- Lossy Compression: It's effective on high-density images with lots of noise and colors, but less effective with imagery containing sharp edges such as line art or text, this can be applied to JPEG, WebP and AVIF.
- Tools that help to compress images:
  - [TinyPNG](https://tinypng.com/)
  - [ImageOptim](https://imageoptim.com/)
  - [Squoosh](https://squoosh.app/)
  - [Compressor.io](https://compressor.io/)

#### File Compression

You may heard of **Minification**, it is a process of removing unnecessary characters from the source code without changing its functionality, it helps to reduce the size of the file, and optimize the performance of the website.

**Tree Shaking** is another technique that helps to remove unused code during the build process, we can use tools like Webpack, Rollup to achieve this.

We can use other techniques like **Code Splitting**, **Lazy Loading** to improve the performance of the website.

In modern frameworks like React, Angular, Vue, they have built-in tools to help developers to optimize the performance of the website.

#### HTTP Compression

HTTP compression is a capability that can be built into web servers and web clients to improve transfer speed and bandwidth utilization, it is supported by most of the modern browsers and servers.

Checkout MDN Web Docs for more information on [HTTP Compression](https://developer.mozilla.org/en-US/docs/Web/HTTP/Compression).
