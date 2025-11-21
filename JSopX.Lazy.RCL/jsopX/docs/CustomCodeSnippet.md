#Add a custom JSopX code snippet section in your modal with a "Copy" button
To add a custom JSopX code snippet section in your modal with a "Copy" button, follow these steps:

### Step 1: Add the Code Snippet Section
Replace the `"Here is code snippet"` text in the modal body with an actual code snippet and the necessary markup:

```html
<div class="modal-body">
    <p>
        <em>JSopX<span class="trademark-symbol">&trade; </span> (Jason Silvestri Open Project EXperiences)</em> is my custom design pattern for enterprise-level, Multi-Platform, Multi-Stack development solutions.
    </p>
    <p>Here is a code snippet:</p>
    <pre>
        <code id="jsopxCodeSnippet" class="language-html">
            &lt;div class=&quot;example-class&quot;&gt;
                &lt;p&gt;This is a sample HTML snippet.&lt;/p&gt;
            &lt;/div&gt;
        </code>
    </pre>
    <button class="btn btn-outline-secondary btn-sm" id="copyJsopxCodeSnippet">Copy</button>
</div>
```

### Step 2: Include the Necessary JavaScript
To enable the "Copy" functionality, add the following JavaScript:

```javascript
document.getElementById('copyJsopxCodeSnippet').addEventListener('click', function() {
    const codeSnippet = document.getElementById('jsopxCodeSnippet').innerText;
    navigator.clipboard.writeText(codeSnippet).then(function() {
        alert('Code copied to clipboard!');
    }).catch(function(error) {
        alert('Failed to copy text: ', error);
    });
});
```

### Step 3: Properly Encode/Decode HTML (Optional)
If you want to ensure proper encoding/decoding of HTML, you can use a utility function:

```javascript
function encodeHTML(html) {
    return html.replace(/&/g, '&amp;')
               .replace(/</g, '&lt;')
               .replace(/>/g, '&gt;')
               .replace(/"/g, '&quot;')
               .replace(/'/g, '&#039;');
}

function decodeHTML(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}
```

### Final Code Integration:
With everything combined:

```html
<div class="modal fade" id="staticBackdropJsopxLive" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLiveLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLiveJsopxLabel">JSopX<span class="trademark-symbol">&trade; </span> (Jason Silvestri Open Project EXperiences)</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>
                    <em>JSopX<span class="trademark-symbol">&trade; </span> (Jason Silvestri Open Project EXperiences)</em> is my custom design pattern for enterprise-level, Multi-Platform, Multi-Stack development solutions.
                </p>
                <p>Here is a code snippet:</p>
                <pre>
                    <code id="jsopxCodeSnippet" class="language-html">
                        &lt;div class=&quot;example-class&quot;&gt;
                            &lt;p&gt;This is a sample HTML snippet.&lt;/p&gt;
                        &lt;/div&gt;
                    </code>
                </pre>
                <button class="btn btn-outline-secondary btn-sm" id="copyJsopxCodeSnippet">Copy</button>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Understood</button>
            </div>
        </div>
    </div>
</div>

<script>
document.getElementById('copyJsopxCodeSnippet').addEventListener('click', function() {
    const codeSnippet = document.getElementById('jsopxCodeSnippet').innerText;
    navigator.clipboard.writeText(codeSnippet).then(function() {
        alert('Code copied to clipboard!');
    }).catch(function(error) {
        alert('Failed to copy text: ', error);
    });
});
</script>
```

### Additional Notes:
- Make sure the code within `<pre><code>` tags is properly escaped to avoid rendering issues.
- The JavaScript function uses the Clipboard API, which is widely supported in modern browsers.

---
#Dealing with uneccessary leading white space
To ensure that the HTML code snippet is properly formatted and displayed without unnecessary leading whitespace in the modal, you can trim the leading whitespace using JavaScript right before rendering the code. Here's how to do it:

### Step 1: Modify the JavaScript to Display the Trimmed Code
Update the JavaScript so that it trims the leading whitespace and then displays the formatted code within the `<code>` tag when the modal is shown.

```javascript
function trimLeadingWhitespace(code) {
    const lines = code.split('\n');
    const indentLength = lines.reduce((minIndent, line) => {
        if (line.trim() === '') return minIndent;
        const indent = line.match(/^\s*/)[0].length;
        return indent < minIndent ? indent : minIndent;
    }, Infinity);

    return lines.map(line => line.substring(indentLength)).join('\n');
}

document.addEventListener('DOMContentLoaded', function() {
    const codeElement = document.getElementById('jsopxCodeSnippet');
    let codeSnippet = codeElement.innerText;
    codeSnippet = trimLeadingWhitespace(codeSnippet);  // Trim leading whitespace
    codeElement.innerText = codeSnippet;

    document.getElementById('copyJsopxCodeSnippet').addEventListener('click', function() {
        navigator.clipboard.writeText(codeSnippet).then(function() {
            alert('Code copied to clipboard!');
        }).catch(function(error) {
            alert('Failed to copy text: ', error);
        });
    });
});
```

### Step 2: Ensure HTML Structure
Your HTML structure remains the same:

```html
<div class="modal fade" id="staticBackdropJsopxLive" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLiveLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLiveJsopxLabel">JSopX<span class="trademark-symbol">&trade; </span> (Jason Silvestri Open Project EXperiences)</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>
                    <em>JSopX<span class="trademark-symbol">&trade; </span> (Jason Silvestri Open Project EXperiences)</em> is my custom design pattern for enterprise-level, Multi-Platform, Multi-Stack development solutions.
                </p>
                <p>Here is a code snippet:</p>
                <pre>
                    <code id="jsopxCodeSnippet" class="language-html">
                        &lt;div class=&quot;example-class&quot;&gt;
                            &lt;p&gt;This is a sample HTML snippet.&lt;/p&gt;
                        &lt;/div&gt;
                    </code>
                </pre>
                <button class="btn btn-outline-secondary btn-sm" id="copyJsopxCodeSnippet">Copy</button>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Understood</button>
            </div>
        </div>
    </div>
</div>
```

### Explanation:
- The `DOMContentLoaded` event ensures that the JavaScript runs after the HTML content has loaded, so the code snippet is trimmed and displayed correctly when the page is rendered.
- The trimmed code is directly inserted back into the `<code>` element, ensuring that the displayed code snippet is free of unnecessary leading whitespace.

This approach makes sure that the code snippet is properly formatted both in the display and when copied to the clipboard.

---
#Using Bootstrap Toasts instead of JavaScript Alerts
To use Bootstrap Toasts instead of alert boxes for displaying copy messages, you can follow these steps:

### Step 1: Add the Toast HTML

Include a Bootstrap toast component in your HTML. You can place it anywhere in your document, typically within the body, so it can be reused:

```html
<!-- Toast Notification -->
<div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="copyToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <strong class="me-auto">Notification</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            Code copied to clipboard!
        </div>
    </div>
</div>
```

### Step 2: Modify the JavaScript to Use the Toast

Update your JavaScript code to trigger the toast notification after the code is copied:

```javascript
function trimLeadingWhitespace(code) {
    const lines = code.split('\n');
    const indentLength = lines.reduce((minIndent, line) => {
        if (line.trim() === '') return minIndent;
        const indent = line.match(/^\s*/)[0].length;
        return indent < minIndent ? indent : minIndent;
    }, Infinity);

    return lines.map(line => line.substring(indentLength)).join('\n');
}

document.addEventListener('DOMContentLoaded', function() {
    const codeElement = document.getElementById('jsopxCodeSnippet');
    let codeSnippet = codeElement.innerText;
    codeSnippet = trimLeadingWhitespace(codeSnippet);  // Trim leading whitespace
    codeElement.innerText = codeSnippet;

    document.getElementById('copyJsopxCodeSnippet').addEventListener('click', function() {
        navigator.clipboard.writeText(codeSnippet).then(function() {
            const toastEl = document.getElementById('copyToast');
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
        }).catch(function(error) {
            console.error('Failed to copy text: ', error);
        });
    });
});
```

### Step 3: Ensure Bootstrap JS and CSS Are Included

Make sure that you have included the Bootstrap CSS and JS in your project:

```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap JS (with Popper) -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
```

### Final Implementation:

```html
<div class="modal fade" id="staticBackdropJsopxLive" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLiveLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLiveJsopxLabel">JSopX<span class="trademark-symbol">&trade; </span> (Jason Silvestri Open Project EXperiences)</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>
                    <em>JSopX<span class="trademark-symbol">&trade; </span> (Jason Silvestri Open Project EXperiences)</em> is my custom design pattern for enterprise-level, Multi-Platform, Multi-Stack development solutions.
                </p>
                <p>Here is a code snippet:</p>
                <pre>
                    <code id="jsopxCodeSnippet" class="language-html">
                        &lt;div class=&quot;example-class&quot;&gt;
                            &lt;p&gt;This is a sample HTML snippet.&lt;/p&gt;
                        &lt;/div&gt;
                    </code>
                </pre>
                <button class="btn btn-outline-secondary btn-sm" id="copyJsopxCodeSnippet">Copy</button>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Understood</button>
            </div>
        </div>
    </div>
</div>

<!-- Toast Notification -->
<div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="copyToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <strong class="me-auto">Notification</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            Code copied to clipboard!
        </div>
    </div>
</div>

<script>
function trimLeadingWhitespace(code) {
    const lines = code.split('\n');
    const indentLength = lines.reduce((minIndent, line) => {
        if (line.trim() === '') return minIndent;
        const indent = line.match(/^\s*/)[0].length;
        return indent < minIndent ? indent : minIndent;
    }, Infinity);

    return lines.map(line => line.substring(indentLength)).join('\n');
}

document.addEventListener('DOMContentLoaded', function() {
    const codeElement = document.getElementById('jsopxCodeSnippet');
    let codeSnippet = codeElement.innerText;
    codeSnippet = trimLeadingWhitespace(codeSnippet);  // Trim leading whitespace
    codeElement.innerText = codeSnippet;

    document.getElementById('copyJsopxCodeSnippet').addEventListener('click', function() {
        navigator.clipboard.writeText(codeSnippet).then(function() {
            const toastEl = document.getElementById('copyToast');
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
        }).catch(function(error) {
            console.error('Failed to copy text: ', error);
        });
    });
});
</script>
```

### Explanation:
- **Toast Container:** The toast is positioned at the bottom-right corner (`bottom-0 end-0`). You can adjust the position as needed.
- **Toast Trigger:** The `bootstrap.Toast` class is used to show the toast when the code is successfully copied.
  
Now, when the user clicks "Copy," a Bootstrap toast will appear in the bottom-right corner of the screen, notifying them that the code has been copied to the clipboard.

---

#Toast being triggered every time the page reloads? 

Toast being triggered every time the page reloads (a postback) is because the toast is initialized and displayed based on the `DOMContentLoaded` event. To avoid this, you can conditionally trigger the toast only when a specific action occurs, such as copying the code snippet.

### Solution:
To ensure the toast only appears when you actually copy the text, and not on every page load, follow these steps:

### Step 1: Update the JavaScript

Modify the JavaScript to store a flag in `localStorage` to indicate that the toast should be displayed, and check this flag when the page is loaded:

```javascript
function trimLeadingWhitespace(code) {
    const lines = code.split('\n');
    const indentLength = lines.reduce((minIndent, line) => {
        if (line.trim() === '') return minIndent;
        const indent = line.match(/^\s*/)[0].length;
        return indent < minIndent ? indent : minIndent;
    }, Infinity);

    return lines.map(line => line.substring(indentLength)).join('\n');
}

document.addEventListener('DOMContentLoaded', function() {
    const codeElement = document.getElementById('jsopxCodeSnippet');
    let codeSnippet = codeElement.innerText;
    codeSnippet = trimLeadingWhitespace(codeSnippet);  // Trim leading whitespace
    codeElement.innerText = codeSnippet;

    document.getElementById('copyJsopxCodeSnippet').addEventListener('click', function() {
        navigator.clipboard.writeText(codeSnippet).then(function() {
            localStorage.setItem('showCopyToast', 'true');  // Set flag in localStorage
            location.reload();  // Reload the page to trigger toast
        }).catch(function(error) {
            console.error('Failed to copy text: ', error);
        });
    });

    if (localStorage.getItem('showCopyToast') === 'true') {
        const toastEl = document.getElementById('copyToast');
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
        localStorage.removeItem('showCopyToast');  // Clear the flag after showing the toast
    }
});
```

### Explanation:
1. **Set Flag on Copy:** When the user clicks the "Copy" button, the `showCopyToast` flag is set in `localStorage`, and the page is reloaded to trigger the toast.

2. **Check Flag on Load:** When the page loads, the script checks for the `showCopyToast` flag in `localStorage`. If it's set to `true`, the toast is displayed, and the flag is cleared.

3. **Prevent Toast on Regular Page Load:** Since the toast is only displayed when the `showCopyToast` flag is set, it won't appear on a normal page load or postback unless the user just copied something.

This approach will ensure that the toast only shows up after the user copies the code and won't trigger on every page postback.

---
#Make the code snippet logic reusable for Multiple Modals
To make the code snippet logic reusable for multiple modals, you can use classes instead of IDs. This way, you can apply the logic to any modal containing code snippets without worrying about ID conflicts. Here's how to implement it:

### Step 1: Update HTML Structure
Use classes instead of IDs for the code snippet elements:

```html
<!-- Modal 1 -->
<div class="modal fade" id="staticBackdropJsopxLive1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLiveLabel1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5">JSopX Example 1</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Here is a code snippet:</p>
                <pre><code class="jsopxCodeSnippet language-html">
                    &lt;div class=&quot;example-class&quot;&gt;
                        &lt;p&gt;This is a sample HTML snippet for Modal 1.&lt;/p&gt;
                    &lt;/div&gt;
                </code></pre>
                <button class="btn btn-outline-secondary btn-sm jsopxCopySnippet">Copy</button>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Understood</button>
            </div>
        </div>
    </div>
</div>

<!-- Modal 2 -->
<div class="modal fade" id="staticBackdropJsopxLive2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLiveLabel2" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5">JSopX Example 2</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Here is another code snippet:</p>
                <pre><code class="jsopxCodeSnippet language-html">
                    &lt;div class=&quot;example-class&quot;&gt;
                        &lt;p&gt;This is a sample HTML snippet for Modal 2.&lt;/p&gt;
                    &lt;/div&gt;
                </code></pre>
                <button class="btn btn-outline-secondary btn-sm jsopxCopySnippet">Copy</button>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Understood</button>
            </div>
        </div>
    </div>
</div>

<!-- Toast Notification -->
<div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div class="toast jsopxToast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <strong class="me-auto">Notification</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            Code copied to clipboard!
        </div>
    </div>
</div>
```

### Step 2: Update JavaScript Logic
Refactor the JavaScript to target elements by class and loop through each modal:

```javascript
document.addEventListener('DOMContentLoaded', function () {
    const codeElements = document.querySelectorAll('.jsopxCodeSnippet');
    const copyButtons = document.querySelectorAll('.jsopxCopySnippet');
    const toastEl = document.querySelector('.jsopxToast');
    const toast = new bootstrap.Toast(toastEl);

    // Initially hide the toast
    toast.hide();

    // Trim leading whitespace and set code snippet text
    codeElements.forEach(codeElement => {
        let codeSnippet = codeElement.innerText;
        codeSnippet = trimLeadingWhitespace(codeSnippet);  // Trim leading whitespace
        codeElement.innerText = codeSnippet;
    });

    // Add event listeners to copy buttons
    copyButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            const codeElement = codeElements[index];
            const codeSnippet = codeElement.innerText;

            navigator.clipboard.writeText(codeSnippet).then(function () {
                toast.show();  // Show the toast when copy is successful
            }).catch(function (error) {
                console.error('Failed to copy text: ', error);
            });
        });
    });
});

function trimLeadingWhitespace(code) {
    const lines = code.split('\n');
    const indentLength = lines.reduce((minIndent, line) => {
        if (line.trim() === '') return minIndent;
        const indent = line.match(/^\s*/)[0].length;
        return indent < minIndent ? indent : minIndent;
    }, Infinity);

    return lines.map(line => line.substring(indentLength)).join('\n');
}

function jsopxEncodeHTML(html) {
    return html.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"//g, '&quot;')
        .replace(/'/g, '&#039;');
}

function jsopxDecodeHTML(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}
```

### Explanation:
- **Class Selectors:** By using classes instead of IDs, the code can handle multiple instances of modals on the same page.
- **Query Selectors:** The script uses `querySelectorAll` to select all elements with the class `.jsopxCodeSnippet` and `.jsopxCopySnippet`, allowing the code to loop through each one.
- **Index Matching:** The script associates each copy button with the corresponding code snippet based on the index, ensuring the right snippet is copied when a button is clicked.

This setup makes the logic modular and reusable across different modals without the risk of conflicts.