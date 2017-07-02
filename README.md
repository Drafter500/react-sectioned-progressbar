# react-sectioned-progressbar
Inspired by https://github.com/iqnivek/react-circular-progressbar, I made a different version of circular progress bar. The only big difference is that progress bar is divided by specified number of sections.

![samples.png](/samples.png?raw=true)

## Props:
<table>
<tr>
<th>Name</th><th>Description</th>
</tr>
<tr>
<td>sizePx</td><td>Size of the component in pixels. The size is equal in height and width since the component is a circle</td>
</tr>
<tr>
<td>total</td><td>Total value (maximum progress)</td>
</tr>
<tr>
<td>progress</td><td>Actuall progress value</td>
</tr>
<tr>
<td>thickness</td><td>Thickness of the sections arcs</td>
</tr>
<tr>
<td>sectionsGapPercent</td><td>Gas between sections in percentage relative to the section itself. 0 means no gap, 50 means the gap between sections equals to the sections length</td>
</tr>
<tr>
<td>className</td><td>CSS class name for the parent element of the component</td>
</tr>
<tr>
<td>textFormatter</td><td>Callback function that is used to generate text inside in the center of the progressbar. E.g:  progress => `${progress}%`</td>
</tr>
<tr>
<td>children</td><td>Everything wrapped by the component is used as progress text</td>
</tr>
</table>
