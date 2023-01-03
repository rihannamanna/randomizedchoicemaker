
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()


	if (randomTag !== undefined) {
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
	}
    }, 100);

    setTimeout(() => {
@@ -64,4 +66,4 @@ function highlightTag(tag) {

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}
}
