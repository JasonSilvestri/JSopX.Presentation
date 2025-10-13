/* global bootstrap: false */

(() => {
    'use strict'

    // Tooltip and popover demos
    document.querySelectorAll('.tooltip-demo')
        .forEach(tooltip => {
            new bootstrap.Tooltip(tooltip, {
                selector: '[data-bs-toggle="tooltip"]'
            })
        })

    document.querySelectorAll('[data-bs-toggle="popover"]')
        .forEach(popover => {
            new bootstrap.Popover(popover)
        })

    document.querySelectorAll('.toast')
        .forEach(toastNode => {
            const toast = new bootstrap.Toast(toastNode, {
                autohide: false
            })

            toast.show()
        })

    // Disable empty links and submit buttons
    document.querySelectorAll('[href="#"], [type="submit"]')
        .forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault()
            })
        })

    /* refresh tabs when scroll spying: false */
    /*
    This was the original code before Nova and I modified the logic to support the headiung
    change, due to our heading we use now

    */
    //document.querySelectorAll('#nav-tab>[data-bs-toggle="tab"]').forEach(el => {
    //    el.addEventListener('shown.bs.tab', () => {
    //        const target = el.getAttribute('data-bs-target')
    //        const scrollElem = document.querySelector(`${target} [data-bs-spy="scroll"]`)
    //        bootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh()
    //    })
    //})

    // Apply ScrollSpy globally on page load
    document.querySelectorAll('[data-bs-spy="scroll"]').forEach(scrollElem => {
        bootstrap.ScrollSpy.getOrCreateInstance(scrollElem, {
            offset: -20 // Adjust this value as needed
        });
    });

    /* refresh tabs when scroll spying: false */
    document.querySelectorAll('#nav-tab>[data-bs-toggle="tab"]').forEach(el => {
        el.addEventListener('shown.bs.tab', () => {
            const target = el.getAttribute('data-bs-target');
            const scrollElem = document.querySelector(`${target} [data-bs-spy="scroll"]`);

            // Refresh ScrollSpy when switching tabs
            bootstrap.ScrollSpy.getOrCreateInstance(scrollElem, {
                offset: 103 // Ensure the same offset is applied
            }).refresh();
        });
    });



    function setActiveItem() {
        const { hash } = window.location

        if (hash === '') {
            return
        }

        const link = document.querySelector(`.bd-aside a[href="${hash}"]`)

        if (!link) {
            return
        }

        const active = document.querySelector('.bd-aside .active')
        const parent = link.parentNode.parentNode.previousElementSibling

        link.classList.add('active')

        if (parent.classList.contains('collapsed')) {
            parent.click()
        }

        if (!active) {
            return
        }

        const expanded = active.parentNode.parentNode.previousElementSibling

        active.classList.remove('active')

        if (expanded && parent !== expanded) {
            expanded.click()
        }
    }

    setActiveItem()
    window.addEventListener('hashchange', setActiveItem)
})()
