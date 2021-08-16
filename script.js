
// function card1() {
//     return
// }
function card1() {
    return `
    <div class="row align-items-start pt-3 d-flex justify-content-around">
    <div class="col-m mb-3 card-style" >
                    <h1 class="text-center">Go</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
                    nisi, cupiditate alias illo
                    assumenda optio odit minus natus tempora repellendus nobis, ipsa magnam eum expedita consequatur
                    ea
                    perferendis veniam beatae! Contrary to popular belief, Lorem Ipsum is not simply random text. It
                    has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
                    the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
                    cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
                    from
                        </p>
                        <h4>45$</h4>
                </div>
                <div class="col-m card-style">
                    <h1 class="text-center">Python</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
                    nisi, cupiditate alias illo
                    assumenda optio odit minus natus tempora repellendus nobis, ipsa magnam eum expedita consequatur
                    ea
                    perferendis veniam beatae! Contrary to popular belief, Lorem Ipsum is not simply random text. It
                    has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
                    the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
                    cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
                    from
                    </p>
                    <h4>60$</h4>
                </div>
            </div>`
}
function card2() {
    return `
    <div class="row align-items-start pt-3 d-flex justify-content-around">
    <div class="col-m mb-3 card-style">
        <h1 class="text-center">JavaScript</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
        nisi, cupiditate alias illo
        assumenda optio odit minus natus tempora repellendus nobis, ipsa magnam eum expedita consequatur
        ea
        perferendis veniam beatae! Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
        the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
        cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
        from
        </p>
            <h4>40$</h4>
    </div>
    <div class="col-m card-style">
        <h1 class="text-center">Php</h1>
        <p> pariatur
        quasi tempore, aliquam sint, voluptatem ea distinctio vitae, eos at veritatis modi accusantium.
        Ex
        corrupti minima nihil.Contrary to popular belief, Lorem Ipsum is not simply random text. It has
        roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
        the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
        cites of 
        </p>
        <h4>50$</h4>
    </div>
</div>
    `

}
const card = document.querySelector(".card");
function change() {
    const checkBox = document.querySelector(".myCheck");
    if (checkBox.checked == false) {
        card.innerHTML = (card1());
    } else if (checkBox.checked == true) {
        card.innerHTML = card2()
    }
}
card.innerHTML = card2();

