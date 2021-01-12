

const TypeWriter = function(txtElement, words, wait=1500){
    this.txtElement = txtElement
    this.words = words;
    this.txt = ''
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10)
    this.type();
    this.isDeleting = false
}

TypeWriter.prototype.type = function(){
    const imgList = ['codigo','design','cobra']
    const current = this.wordIndex % this.words.length
    const currentImg = imgList[current]
    const imgSpace = document.querySelector('.img-icon').childNodes[1]
    imgSpace.src = 'img/'+currentImg+'.svg'
    const fulltxt = this.words[current]
    if(this.isDeleting){
        this.txt = fulltxt.substring(0, this.txt.length - 1)
    }else{
        this.txt = fulltxt.substring(0, this.txt.length+1)
    }
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

    let typeSpeed = 250;
    if(this.isDeleting){
        typeSpeed /= 2
    }
    

    if(!this.isDeleting && this.txt === fulltxt){
        typeSpeed = this.wait
        this.isDeleting = true
    }else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false
        this.wordIndex++;
        typeSpeed = 500
    }
    if(this.txt == 'Reptilian'){
        typeSpeed = 100
         
    }

    setTimeout(()=> this.type(), typeSpeed)
}

document.addEventListener('DOMContentLoaded', init);

function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'))
    console.log(words)
    const wait = txtElement.getAttribute('data-wait')
    new TypeWriter(txtElement,words, wait)
    var a = document.querySelectorAll('.end')
    a = Array.prototype.slice.call(a);
    a.map(elem => {
        console.log(elem.classList[0])
    })


    index = 0
    var angle = 0
    $('.end').on('click', event =>{
        var className = $(event.target).attr("class").split(" ")[1]
        var className = '.'+className
        if(index%2){
            angle = 180
        }else{
            angle= 360
        }
        console.log(angle)
        $(".end"+className).css({
            "transform":"rotate("+angle+"deg)"
        })
        var div = '.job-specs'+ className
        $(div).slideToggle(300)
        index += 1
    })
    
    // $('.1').on('click', ()=>{
    //     console.log("aaaa")
    //     $('.job-specs 1').slideToggle(300)
    // })

    // $('.end').on('click', ()=>{
    //     var a = $('.end').parents()
    //     // console.log($(this))
    //     $('.job-specs').slideToggle(300)
    //     $('end').css({
    //         'transform': 'rotate(180deg)'
    //     })
    // })
}



