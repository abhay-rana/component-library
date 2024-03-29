// React Context Portal Modal

-   use of context api hook in a optimized manner
-   we have two hooks for this modal one is for toggling the modal in open or close state => useModalUpdater()
    and one hook for the getting the modalState id is present or not => useModalState()
    as the end user have no use case of the useModalState() it is used by the modal component internally
-   use of the react portal also
-   get the state of the modal also
-   close the modal by the escape key
-   solves the problems of the z-index
-   close the modal by outside click also
-   fires a function on the close of the modal
-   hide the modal by the dispatcher function also
-   close the modal by the close button provided inside the modal also
-   do not render the modal dom elements until the we specify to show the modal
-   use of context so we can call the modal so no need of the props drilling and managing states

//important props
1-> id = "dummy_id" (string) //id name is very necessary, this id attached to the which is siblings to the root div , modal should have a unique id
2-> onClose={()=>{}} (function) // function , when you want to run on the closing of the modal
3-> closeButton (Boolean) (default -> true)// if you want to show the close button
4-> closeOnEscapeKey (Boolean) (default -> false) //if you want to close the modal on the "escape" key
5-> clickOutsideClose (Boolean) (default -> false) //if you want to close the modal on the click of the outside
6-> scrollLock (Boolean) (default->true) //if you want dont want to scrolling of the background (body)
7-> show_modal (Boolean) (default->false) //if you want to handle the modal visibility by the state

//if there is the onClose prop is passed to the <Modal onClose={}> component so it will fire every time as the modal is closed by the
escape button , cross button , outside clicks or programmatically close of the modal (by the Modal.hide("id"))
so there are 4 ways so to close this modal
1-> outside click
2-> escape button (Accessibility)
3-> close button
4-> programmatically Modal.hide("id")

<!-- React Accordion Component -->

1-> uses of the compound components for the flexibility and the reusability pof the components
2-> uses of the react context api
3-> fire the callback function on the opens and the closes of the accordion
4-> defaultExpanded accordion
5-> opensUp the multiple accordion at a time (by default it is "False")
6-> works on the re-rending of the accordion (future request)
7-> user change the caret image according to itself and change the position (future request)
8-> all the content is loaded in the dom but shown when the user expand to it which is best for the terms of the seo

<!-- React TextArea -->

1-> Auto grow textarea
2-> have the minimum height of the textarea "minHeight" (compulsory) (in pixels) (default minHeight is 48px)
3-> have the maximum height of the textarea after that height if the more content is added then show the scroll bar increase the scroll height but not the height "maxHeight"
4-> max word count also which will stops the writing
5-> by default resizing is not allowed if you want you can pass the "resize" props

<!-- react Custom Input Floating label-->

1->"required" props for the asterisk sign (default false)
2-> "onChange" to set the "value" of the input
3-> "error" validation with the red cross icon
4-> "prefix" for the image or the text at the starting
5-> "suffix" for the image or the text or can be the both
6-> "description" tells more about the input
7-> "wordCount"(shows the total characters) for the written text should not be go beyond the "maxLength"
8-> variants are "base" and "large"
9-> "reveal" for showing the password
10-> "stacked" for the border bottom
11-> "filled" for the grey background

<!-- react Normal input  -->

1-> "labelClassName" to style the label
2-> "error"
3-> "stacked"

<!-- React Radio button -->

height and width works normally but color does not work so we give the accent color
reset the browser styling radio button by "appearance-none"
make our own radio button styling by the span tag

1-> group of radio buttons "name" props is must for the grouping
2-> style the radio container <RadioGroup/> by the className
3-> it should be checked if the "value" provided by the <RadioGroup/> is equal to "value" given to the <Radio/>

<!-- React Checkbox -->

1-> "checked" props decide the checkbox state
2-> "disabled" props for the further modification
3-> "label" prop for the labeling
4-> "onClick" and "onFocus" for the firing of the function
5-> "name" should have the different(unique) name props
6-> "checked" props is a (boolean)

<!-- RippleEffect Wrapper Component -->

1-> wrap the children component inside this component
2-> dont propagate the event from children to the parent
like product card inside this component there can be many component which have the ripple effect also

<!-- Select Option -->

1-> cross platform select
2-> material select
3-> "required" props if you want the asterisk
4-> "error"
5-> "note"

<!-- Divider -->

1-> custom border color "color"
2-> custom text color "textColor"
3-> custom direction of the line default-> "horizontal", "vertical"
4-> text can be at "top","center","bottom","left",
5-> "gap" for the gaps between the line
6-> "marginRight","marginLeft","marginTop","marginBottom"

<!-- Tooltip (not completed) -->

1-> open in the hover , open in the click
2-> provide the color props
3-> render the custom component
4-> give the text props
5-> automatically manages where to render the popup if there is nothing in down and the bottom prop is passed so it will render at the top
6-> className for styling manage the color
<Tooltip
text="hello" className={""} primary warning danger renderComp={<CustomComponent/>} onHover onClick position={top,left,right,bottom,topLeft} opened={opened_state} color openDelay={200} closeDelay={400}>
<Button>Hello Abhay</Button> //to render the custom tooltip
</Tooltip>

<!-- Dropdown(not completed) -->

<!-- CustomSelect -->

<!-- Tabs (not completed) -->

<!-- Navbar (not completed) -->

<!-- Drawer (not completed) -->

<!-- Rating  -->

<!-- Nanobar -->

<!-- Image -->

1-> avatar
2-> fallback image
3-> blur image/ progressive image
4-> onError onSuccess

<!-- Table -->

<!-- Datepicker -->

<!-- MaterialButton (completed) -->

<!-- SkeletonComponent (completed) -->
