# Mathematics in Markdown

## Atom integration
1. Install [Markdown Preview Plus](https://github.com/atom-community/markdown-preview-plus)
1. Install [MathJax Wrapper](https://atom.io/packages/mathjax-wrapper)
1. Toggle LaTeX math support
    * Packages -> Markdown Preview Plus -> Toggle LaTeX rendering
1. [OPTIONAL] Styling:
    * Atom -> Preferences -> Packages -> Markdown Preview Plus -> Settings
    * Enable "Use Github.com style"

## Syntax
### Centred Formula
```
$$\sum_{i=1}^{10} t_i$$
```
$$\sum_{i=1}^{10} t_i$$

### Inline Formula
```
This is a $a_i^2$ example
```
This is a $a_i^2$ example

### Matrix
```
$$
A = \begin{bmatrix}
a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \dots & a_{mn} \\
\end{bmatrix}
$$
```

$$
A = \begin{bmatrix}
a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \dots & a_{mn} \\
\end{bmatrix}
$$

```
$$\begin{pmatrix}
  a & b\\
  c & d
  \end{pmatrix}$$
```

$$\begin{pmatrix}
  a & b\\
  c & d
  \end{pmatrix}$$

### Symbols
[Reference](http://csrgxtu.github.io/2015/03/20/Writing-Mathematic-Fomulars-in-Markdown/)
