import { createSlice } from "@reduxjs/toolkit";
const messageBot = {content: `
Hi! welcome to JabberGPT

## Code:
**Language support, copy to clipboard, syntax highlighting, wrapping, code line numbers**

~~~python
from langchain.memory.motorhead_memory import MotorheadMemory
from langchain import OpenAI, LLMChain, PromptTemplate

template = """You are a chatbot having a conversation with a human.

{chat_history}
Human: {human_input}
AI:"""

prompt = PromptTemplate(
    input_variables=["chat_history", "human_input"], template=template
)
~~~

~~~js
<div className="parent-div">
  <CopyToClipboard
    text={children}
    className="button ml-1 mt-1 text-white cursor-pointer"
  >
    {/* <button className="bg-white">Copy to clipboard with button</button> */}
    <FaRegCopy/>
  </CopyToClipboard>
</div>
~~~


## Headings:
**6 levels of headings supported**

# heading 1
## heading 2
### heading 3
#### heading 4
##### heading 5
###### heading 6


## Text Emphasis:
**All the text emphasis techniques**

*Italic text*

**Bold text**

***Bold and italic text***

~~Strikethrough text~~


## Lists:
**Lists with items and subitems**

- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
    1. Sub-subitem 2.2.1
    2. Sub-subitem 2.2.2
- Item 3

## Links:
**URL support**

[Link to Markdown Guide](https://www.markdownguide.org/)

## Images:
**Image rendering**

![Alt text](https://www.w3schools.com/python/img_matplotlib_plotting1.png)

## Quotes:
**Blockqoutes**

> This is a blockquote.

## Tables:
**Tables with rounded edges**

|       | Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 | Column 8 | Column 9 | Column 10 | Column 11 | Column 12 | Column 13 | Column 14 | Column 15 | Column 16 |
| ----- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| Row 1 |          |          |          |          |          |          |          |          |          |            |            |            |            |            |            |            |
| Row 2 |          |          |          |          |          |          |          |          |          |            |            |            |            |            |            |            |
| Row 3 |          |          |          |          |          |          |          |          |          |            |            |            |            |            |            |            |
| Row 4 |          |          |          |          |          |          |          |          |          |            |            |            |            |            |            |            |
| Row 5 |          |          |          |          |          |          |          |          |          |            |            |            |            |            |            |            |
| Row 6 |          |          |          |          |          |          |          |          |          |            |            |            |            |            |            |            |
| Row 7 |          |          |          |          |          |          |          |          |          |            |            |            |            |            |            |            |
| Row 8 |          |          |          |          |          |          |          |          |          |            |            |            |            |            |            |            |
| Row 9 |          |          |          |          |          |          |          |          |          |            |            |            |            |            |            |            |
| Row 10|          |          |          |          |          |          |          |          |          |            |            |            |            |            |            |            |
| Row 11|          |          |          |          |          |          |          |          |          |            |            |            |            |            |            |            |
| Row 12|          |          |          |          |          |          |          |          |          |            |            |            |            |            |            |            |
| Row 13|          |          |          |          |          |          |          |          |          |            |            |            |            |            |            |            |

## Checkboxes:
**Checkboxes rendered**

- [ ] Task 1
- [x] Task 2
- [ ] Task 3

## Math Formulae:
**Support for math equations**

$x = a + b$
`, isUser: false};
const testChatSlice = createSlice({
    name: 'testChat',
    initialState: { messages: [messageBot] },
    reducers: {
        addMessage(state, action) {
            state.messages.push(action.payload)
        },
    }
})

const { actions, reducer } = testChatSlice

export const { addMessage } = actions

export default reducer