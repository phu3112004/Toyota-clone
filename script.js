

const PrevBtn = document.querySelector('#slide-prev-btn')
const NextBtn = document.querySelector('#slide-next-btn')

function pageColor(id){
    console.log(id)
    const pageItems = document.querySelectorAll('.slide-page-item');
    for(var pageItem of pageItems){
        pageItem.classList.remove('red');
    }

    if(id == 'slide-1'){
        document.querySelector('#slide-page-1').classList.add('red')
    }
    else if(id == 'slide-2'){
        document.querySelector('#slide-page-2').classList.add('red')
    }
    else if(id == 'slide-3'){
        document.querySelector('#slide-page-3').classList.add('red')
    }
    else if(id == 'slide-4'){
        document.querySelector('#slide-page-4').classList.add('red')
    }
}

NextBtn.addEventListener('click', () => {
    const SlideItems = document.querySelectorAll('.slide');
    document.querySelector('.slide-content').appendChild(SlideItems[0]);
    const id = SlideItems[2].id;
    pageColor(id);
})

PrevBtn.addEventListener('click', () => {
    const SlideItems = document.querySelectorAll('.slide');
    document.querySelector('.slide-content').prepend(SlideItems[SlideItems.length - 1]);
    const id = SlideItems[0].id;
    pageColor(id);
})

document.querySelector('.background-img1 img').addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện click trên phần tử con
    event.stopPropagation(); // Ngăn chặn sự lan truyền của sự kiện click từ phần tử cha xuống phần tử con
});
document.querySelector('.background-img2 img').addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện click trên phần tử con
    event.stopPropagation(); // Ngăn chặn sự lan truyền của sự kiện click từ phần tử cha xuống phần tử con
});

const seDan = document.querySelector('#Sedan')
const hatchBack = document.querySelector('#Hatchback');
const SUV = document.querySelector('#SUV')
const daDung = document.querySelector('#DaDung')
const banTai = document.querySelector('#BanTai')
const carContent = document.querySelector('.car-content');
function deleteCarClick(){
    const carItems = document.querySelectorAll('.car-name-item')
    for(carItem of carItems){
        carItem.classList.remove('name-click')
    }
}
hatchBack.addEventListener('click', () =>{
    deleteCarClick();
    hatchBack.classList.add('name-click');
    carContent.innerHTML = `
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 1.2</p>
            <p>Dung tích: 1.197cc</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/2B145FE80DA2EB1E130C8767B693D021.png');">
            
        </div>
        <div class="car-title">
            Wigo
        </div>
        <div class="car-price">
            360.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>5 Chỗ</p>
            <p>Số sàn 5 cấp</p>
        </div>
    </div>
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 1.5</p>
            <p>Dung tích: 1.496cc</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/7BAC1028645009E904340E40AB628EC7.png');">
            
        </div>
        <div class="car-title">
            Yaris
        </div>
        <div class="car-price">
            684.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>5 Chỗ</p>
            <p>Số tự động vô cấp</p>
        </div>
    </div>
    `
})
SUV.addEventListener('click', ()=>{
    deleteCarClick();
    SUV.classList.add('name-click');
    carContent.innerHTML = `
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 1.5L</p>
            <p>Dung tích: 1.496cc</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/DB64D61952050267C2FFE2272E14007E.png');">
            
        </div>
        <div class="car-title">
            Yaris Cross
        </div>
        <div class="car-price">
            650.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>5 Chỗ</p>
            <p>Vô cấp CVT</p>
        </div>
    </div>
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 1.8</p>
            <p>Dung tích: 1.798cc</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/D1169FB589F9EF6122991D894150BCFD.png');">
            
        </div>
        <div class="car-title">
            Corolla Cross
        </div>
        <div class="car-price">
            760.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>5 Chỗ</p>
            <p>Hộp số tự động vô cấp CVT</p>
        </div>
    </div>
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 1.0</p>
            <p>Dung tích: 998cc</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/1052B1A4AE5C2C5809F65C757841A149.png');">
            
        </div>
        <div class="car-title">
            Raize
        </div>
        <div class="car-price">
            498.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>5 Chỗ</p>
            <p>Vô cấp CVT</p>
        </div>
    </div>
    `
})
daDung.addEventListener('click', ()=>{
    deleteCarClick();
    daDung.classList.add('name-click');
    carContent.innerHTML = `
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 2.0</p>
            <p>Dung tích: 1.987cc</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/EDBF83A9C97849C00B8A6B900CE213A5.png');">
            
        </div>
        <div class="car-title">
            Innova Cross
        </div>
        <div class="car-price">
            810.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>8 Chỗ</p>
            <p>Số tự động vô cấp</p>
        </div>
    </div>
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 1.5</p>
            <p>Dung tích: 1.496cc</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/4C0BCFB9EA9EF8A9D28FCFDA19D83303.jpg');">
            
        </div>
        <div class="car-title">
            Veloz Cross
        </div>
        <div class="car-price">
            658.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>7 Chỗ</p>
            <p>CVT</p>
        </div>
    </div>
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 1.5</p>
            <p>Dung tích: 1.496cc</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/B1C4482978DB18DA2DB5DB1DA1DFF01F.png');">
            
        </div>
        <div class="car-title">
            Avanza Premio
        </div>
        <div class="car-price">
            558.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>7 Chỗ</p>
            <p>CVT</p>
        </div>
    </div>
    `
})
banTai.addEventListener('click',()=>{
    deleteCarClick();
    banTai.classList.add('name-click');
    carContent.innerHTML = `
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 2.4</p>
            <p>Dung tích: 2.393</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/B3E1E057D1B5A2BAE5AA6B8FB5465A44.png');">
            
        </div>
        <div class="car-title">
            Hilux
        </div>
        <div class="car-price">
            852.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>5 Chỗ</p>
            <p>Số tự động 6 cấp/6AT </p>
        </div>
    </div>
    `
})
seDan.addEventListener('click', ()=>{
    deleteCarClick();
    seDan.classList.add('name-click')
    carContent.innerHTML = `
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 1.5</p>
            <p>Dung tích: 1.496cc</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/BCF393FA9AFEC309E1F2A98CF5A57CEB.png');">
            
        </div>
        <div class="car-title">
            Vios
        </div>
        <div class="car-price">
            479.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>5 Chỗ</p>
            <p>Số tay 5 cấp</p>
        </div>
    </div>
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 1.8</p>
            <p>Dung tích: 1.798cc</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/0B0BE4DDC80614697A93E04ED496B3E2.jpg');">
            
        </div>
        <div class="car-title">
            Corolla Altis
        </div>
        <div class="car-price">
            725.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>5 Chỗ</p>
            <p>CVT</p>
        </div>
    </div>
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 2.0</p>
            <p>Dung tích: 1.987cc</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/448F5CB4E8D6742CF606DA3C605145FA.png');">
            
        </div>
        <div class="car-title">
            Camry
        </div>
        <div class="car-price">
            1.105.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>5 Chỗ</p>
            <p>Số tự động vô cấp CVT</p>
        </div>
    </div>
    `
})


const seDanSlide = document.querySelector('#Sedan-slide');
const hatchBackSlide = document.querySelector('#Hatchback-slide');
const SUVSlide = document.querySelector('#SUV-slide');
const daDungSlide = document.querySelector('#DaDung-slide');
const banTaiSlide = document.querySelector('#BanTai-slide');
const carContentSlide = document.querySelector('.car-content-slide');
function deleteCarClickSlide(){
    const carItems = document.querySelectorAll('.car-name-item-slide')
    for(carItem of carItems){
        carItem.classList.remove('name-click')
    }
}
hatchBackSlide.addEventListener('click', () =>{
    deleteCarClickSlide();
    hatchBackSlide.classList.add('name-click');
    carContentSlide.innerHTML = `
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 1.2</p>
            <p>Dung tích: 1.197cc</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/2B145FE80DA2EB1E130C8767B693D021.png');">
            
        </div>
        <div class="car-title">
            Wigo
        </div>
        <div class="car-price">
            360.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>5 Chỗ</p>
            <p>Số sàn 5 cấp</p>
        </div>
    </div>
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 1.5</p>
            <p>Dung tích: 1.496cc</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/7BAC1028645009E904340E40AB628EC7.png');">
            
        </div>
        <div class="car-title">
            Yaris
        </div>
        <div class="car-price">
            684.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>5 Chỗ</p>
            <p>Số tự động vô cấp</p>
        </div>
    </div>
    `
});
SUVSlide.addEventListener('click', ()=>{
    deleteCarClickSlide();
    SUVSlide.classList.add('name-click');
    carContentSlide.innerHTML = `
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 1.5L</p>
            <p>Dung tích: 1.496cc</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/DB64D61952050267C2FFE2272E14007E.png');">
            
        </div>
        <div class="car-title">
            Yaris Cross
        </div>
        <div class="car-price">
            650.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>5 Chỗ</p>
            <p>Vô cấp CVT</p>
        </div>
    </div>
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 1.8</p>
            <p>Dung tích: 1.798cc</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/D1169FB589F9EF6122991D894150BCFD.png');">
            
        </div>
        <div class="car-title">
            Corolla Cross
        </div>
        <div class="car-price">
            760.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>5 Chỗ</p>
            <p>Hộp số tự động vô cấp CVT</p>
        </div>
    </div>
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 1.0</p>
            <p>Dung tích: 998cc</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/1052B1A4AE5C2C5809F65C757841A149.png');">
            
        </div>
        <div class="car-title">
            Raize
        </div>
        <div class="car-price">
            498.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>5 Chỗ</p>
            <p>Vô cấp CVT</p>
        </div>
    </div>
    `
});

daDungSlide.addEventListener('click', ()=>{
    deleteCarClickSlide();
    daDungSlide.classList.add('name-click');
    carContentSlide.innerHTML = `
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 2.0</p>
            <p>Dung tích: 1.987cc</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/EDBF83A9C97849C00B8A6B900CE213A5.png');">
            
        </div>
        <div class="car-title">
            Innova Cross
        </div>
        <div class="car-price">
            810.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>8 Chỗ</p>
            <p>Số tự động vô cấp</p>
        </div>
    </div>
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 1.5</p>
            <p>Dung tích: 1.496cc</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/4C0BCFB9EA9EF8A9D28FCFDA19D83303.jpg');">
            
        </div>
        <div class="car-title">
            Veloz Cross
        </div>
        <div class="car-price">
            658.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>7 Chỗ</p>
            <p>CVT</p>
        </div>
    </div>
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 1.5</p>
            <p>Dung tích: 1.496cc</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/B1C4482978DB18DA2DB5DB1DA1DFF01F.png');">
            
        </div>
        <div class="car-title">
            Avanza Premio
        </div>
        <div class="car-price">
            558.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>7 Chỗ</p>
            <p>CVT</p>
        </div>
    </div>
    `
});

banTaiSlide.addEventListener('click',()=>{
    deleteCarClickSlide();
    banTaiSlide.classList.add('name-click');
    carContentSlide.innerHTML = `
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 2.4</p>
            <p>Dung tích: 2.393</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/B3E1E057D1B5A2BAE5AA6B8FB5465A44.png');">
            
        </div>
        <div class="car-title">
            Hilux
        </div>
        <div class="car-price">
            852.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>5 Chỗ</p>
            <p>Số tự động 6 cấp/6AT </p>
        </div>
    </div>
    `
});

seDanSlide.addEventListener('click', ()=>{
    deleteCarClickSlide();
    seDanSlide.classList.add('name-click')
    carContentSlide.innerHTML = `
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 1.5</p>
            <p>Dung tích: 1.496cc</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/BCF393FA9AFEC309E1F2A98CF5A57CEB.png');">
            
        </div>
        <div class="car-title">
            Vios
        </div>
        <div class="car-price">
            479.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>5 Chỗ</p>
            <p>Số tay 5 cấp</p>
        </div>
    </div>
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 1.8</p>
            <p>Dung tích: 1.798cc</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/0B0BE4DDC80614697A93E04ED496B3E2.jpg');">
            
        </div>
        <div class="car-title">
            Corolla Altis
        </div>
        <div class="car-price">
            725.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>5 Chỗ</p>
            <p>CVT</p>
        </div>
    </div>
    <div class="car">
        <div class="car-des">
            <p>Động cơ: 2.0</p>
            <p>Dung tích: 1.987cc</p>
        </div>
        <div class="car-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/448F5CB4E8D6742CF606DA3C605145FA.png');">
            
        </div>
        <div class="car-title">
            Camry
        </div>
        <div class="car-price">
            1.105.000.000<sup class="grey">VNĐ</sup>
        </div>
        <div class="car-info">
            <p>5 Chỗ</p>
            <p>Số tự động vô cấp CVT</p>
        </div>
    </div>
    `
});

const navSP = document.querySelector('#nav-content-sp-click')
const navContentSP = document.querySelector('.nav-content-sp')
navSP.addEventListener('click', () =>{
    const isVisableSP = navContentSP.style.display
    if(isVisableSP == 'none'){
        navSP.innerHTML = `Sản phẩm<i class="fa-solid fa-angle-up"></i>`
        navSP.classList.add('nav-content-hover-background')
        navContentSP.style.display = 'block'
        navContentSP.style.animation ='fadeIn 0.5s forwards'
        

        navCN.innerHTML = `Công nghệ<i class="fa-solid fa-angle-down"></i>`
        navContentCN.style.display = 'none'
        navDV.innerHTML = `Dịch vụ<i class="fa-solid fa-angle-down"></i>`
        navContentDV.style.display = 'none'
        navTT.innerHTML = `Tin tức & Khuyến mãi<i class="fa-solid fa-angle-down"></i>`
        navContentTT.style.display = 'none'
        navDH.innerHTML = `Điện hóa<i class="fa-solid fa-angle-down"></i>`
        navContentDH.style.display = 'none'
        navVTYT.innerHTML = `Về Toyota Việt Nam<i class="fa-solid fa-angle-down"></i>`
        navDV.classList.remove('nav-content-hover-background')
        navTT.classList.remove('nav-content-hover-background')
        navDH.classList.remove('nav-content-hover-background')
        navVTYT.classList.remove('nav-content-hover-background')
        navContentVTYT.style.display = 'none'
        navCN.classList.remove('nav-content-hover-background')

    }
    else{
        navSP.classList.remove('nav-content-hover-background')
        navSP.innerHTML = `Sản phẩm<i class="fa-solid fa-angle-down"></i>`
        navContentSP.style.display = 'none'
        navContentSP.style.animation ='fadeOut 0.5s forwards'
    }
s
})

const navCN = document.querySelector('#nav-content-cn-click')
const navContentCN = document.querySelector('.nav-content-cn')
navCN.addEventListener('click', () =>{
    const isVisableCN = navContentCN.style.display
    if(isVisableCN == 'none'){
        navContentSP.style.display = 'none'
        navSP.innerHTML = `Sản phẩm<i class="fa-solid fa-angle-down"></i>`
        navSP.classList.remove('nav-content-hover-background')
        navTT.classList.remove('nav-content-hover-background')
        navDH.classList.remove('nav-content-hover-background')

        navDV.innerHTML = `Dịch vụ<i class="fa-solid fa-angle-down"></i>`
        navDV.classList.remove('nav-content-hover-background')
        navContentDV.style.display = 'none'
        navTT.innerHTML = `Tin tức & Khuyến mãi<i class="fa-solid fa-angle-down"></i>`
        navContentTT.style.display = 'none'
        navDH.innerHTML = `Điện hóa<i class="fa-solid fa-angle-down"></i>`
        navContentDH.style.display = 'none'
        navVTYT.innerHTML = `Về Toyota Việt Nam<i class="fa-solid fa-angle-down"></i>`
        navVTYT.classList.remove('nav-content-hover-background')
        navContentVTYT.style.display = 'none'

        navCN.innerHTML = `Công nghệ<i class="fa-solid fa-angle-up"></i>`
        navContentCN.style.display = 'inline-flex'
        navContentCN.style.animation ='fadeIn 0.5s forwards'
        navCN.classList.add('nav-content-hover-background')
    }
    else{
        navCN.classList.remove('nav-content-hover-background')
        navContentCN.style.animation ='fadeOut 0.5s forwards'
        navCN.innerHTML = `Công nghệ<i class="fa-solid fa-angle-down"></i>`
        navContentCN.style.display = 'none'
    }

})


const navDV = document.querySelector('#nav-content-dv-click')
const navContentDV = document.querySelector('.nav-content-dv')
navDV.addEventListener('click', () =>{
    const isVisableDV = navContentDV.style.display
    if(isVisableDV == 'none'){
        navSP.classList.remove('nav-content-hover-background')
        navContentSP.style.display = 'none'
        navSP.innerHTML = `Sản phẩm<i class="fa-solid fa-angle-down"></i>`
        navCN.classList.remove('nav-content-hover-background')
        navTT.classList.remove('nav-content-hover-background')
        navContentCN.style.display = 'none'
        navCN.innerHTML = `Công nghệ<i class="fa-solid fa-angle-down"></i>`
        navTT.innerHTML = `Tin tức & Khuyến mãi<i class="fa-solid fa-angle-down"></i>`
        navContentTT.style.display = 'none'
        navDH.innerHTML = `Điện hóa<i class="fa-solid fa-angle-down"></i>`
        navContentDH.style.display = 'none'
        navVTYT.innerHTML = `Về Toyota Việt Nam<i class="fa-solid fa-angle-down"></i>`
        navDH.classList.remove('nav-content-hover-background')
        navVTYT.classList.remove('nav-content-hover-background')
        navContentVTYT.style.display = 'none'

        navDV.innerHTML = `Dịch vụ<i class="fa-solid fa-angle-up"></i>`
        navContentDV.style.display = 'inline-flex'
        navDV.classList.add('nav-content-hover-background')
        navContentDV.style.animation ='fadeIn 0.5s forwards'
    }
    else{
        navDV.classList.remove('nav-content-hover-background')
        navDV.innerHTML = `Dịch vụ<i class="fa-solid fa-angle-down"></i>`
        navContentDV.style.display = 'none'
        navContentDV.style.animation ='fadeOut 0.5s forwards'
    }

})

const navTT = document.querySelector('#nav-content-tt-click')
const navContentTT = document.querySelector('.nav-content-tt')
navTT.addEventListener('click', () =>{
    const isVisableTT = navContentTT.style.display
    if(isVisableTT == 'none'){
        navSP.classList.remove('nav-content-hover-background')
        navContentSP.style.display = 'none'
        navSP.innerHTML = `Sản phẩm<i class="fa-solid fa-angle-down"></i>`
        navContentCN.style.display = 'none'
        navCN.classList.remove('nav-content-hover-background')
        navCN.innerHTML = `Công nghệ<i class="fa-solid fa-angle-down"></i>`
        navDV.classList.remove('nav-content-hover-background')
        navContentDV.style.display = 'none'
        navDV.innerHTML = `Dịch vụ<i class="fa-solid fa-angle-down"></i>`
        navDH.innerHTML = `Điện hóa<i class="fa-solid fa-angle-down"></i>`
        navContentDH.style.display = 'none'
        navVTYT.innerHTML = `Về Toyota Việt Nam<i class="fa-solid fa-angle-down"></i>`
        navDH.classList.remove('nav-content-hover-background')
        navVTYT.classList.remove('nav-content-hover-background')
        navContentVTYT.style.display = 'none'

        navTT.innerHTML = `Tin tức & Khuyến mãi<i class="fa-solid fa-angle-up"></i>`
        navContentTT.style.display = 'inline-flex'
        navContentTT.style.animation ='fadeIn 0.5s forwards'
        navTT.classList.add('nav-content-hover-background')
    }
    else{
        navTT.innerHTML = `Tin tức & Khuyến mãi<i class="fa-solid fa-angle-down"></i>`
        navTT.classList.remove('nav-content-hover-background')
        navContentTT.style.display = 'none'
        navContentTT.style.animation ='fadeOut 0.5s forwards'
    }

})

const navDH = document.querySelector('#nav-content-dh-click')
const navContentDH = document.querySelector('.nav-content-dh')
navDH.addEventListener('click', () =>{
    const isVisableDH = navContentDH.style.display
    if(isVisableDH == 'none'){
        navSP.classList.remove('nav-content-hover-background')
        navContentSP.style.display = 'none'
        navSP.innerHTML = `Sản phẩm<i class="fa-solid fa-angle-down"></i>`
        navContentCN.style.display = 'none'
        navCN.classList.remove('nav-content-hover-background')
        navCN.innerHTML = `Công nghệ<i class="fa-solid fa-angle-down"></i>`
        navDV.classList.remove('nav-content-hover-background')
        navContentDV.style.display = 'none'
        navDV.innerHTML = `Dịch vụ<i class="fa-solid fa-angle-down"></i>`
        navTT.innerHTML = `Tin tức & Khuyến mãi<i class="fa-solid fa-angle-down"></i>`
        navTT.classList.remove('nav-content-hover-background')
        navContentTT.style.display = 'none'
        navVTYT.innerHTML = `Về Toyota Việt Nam<i class="fa-solid fa-angle-down"></i>`
        navVTYT.classList.remove('nav-content-hover-background')
        navContentVTYT.style.display = 'none'

        navDH.innerHTML = `Điện hóa<i class="fa-solid fa-angle-up"></i>`
        navContentDH.style.display = 'inline-flex'
        navDH.classList.add('nav-content-hover-background')
        navContentDH.style.animation ='fadeIn 0.5s forwards'
    }
    else{
        navDH.classList.remove('nav-content-hover-background')
        navDH.innerHTML = `Điện hóa<i class="fa-solid fa-angle-down"></i>`
        navContentDH.style.display = 'none'
        navContentDH.style.animation ='fadeOut 0.5s forwards'
    }
})

const navVTYT = document.querySelector('#nav-content-vtyt-click')
const navContentVTYT = document.querySelector('.nav-content-vtyt')
navVTYT.addEventListener('click', () =>{
    const isVisableDH = navContentVTYT.style.display
    if(isVisableDH == 'none'){
        navSP.classList.remove('nav-content-hover-background')
        navContentSP.style.display = 'none'
        navSP.innerHTML = `Sản phẩm<i class="fa-solid fa-angle-down"></i>`
        navContentCN.style.display = 'none'
        navCN.classList.remove('nav-content-hover-background')
        navCN.innerHTML = `Công nghệ<i class="fa-solid fa-angle-down"></i>`
        navDV.classList.remove('nav-content-hover-background')
        navTT.classList.remove('nav-content-hover-background')
        navContentDV.style.display = 'none'
        navDV.innerHTML = `Dịch vụ<i class="fa-solid fa-angle-down"></i>`
        navTT.innerHTML = `Tin tức & Khuyến mãi<i class="fa-solid fa-angle-down"></i>`
        navContentTT.style.display = 'none'
        navDH.innerHTML = `Điện hóa<i class="fa-solid fa-angle-down"></i>`
        navDH.classList.remove('nav-content-hover-background')
        navContentDH.style.display = 'none'

        navVTYT.innerHTML = `Về Toyota Việt Nam<i class="fa-solid fa-angle-up"></i>`
        navContentVTYT.style.display = 'inline-flex'
        navVTYT.classList.add('nav-content-hover-background')
        navContentVTYT.style.animation ='fadeIn 0.5s forwards'
    }
    else{
        navVTYT.innerHTML = `Về Toyota Việt Nam<i class="fa-solid fa-angle-down"></i>`
        navVTYT.classList.remove('nav-content-hover-background')
        navContentVTYT.style.display = 'none'
        navContentVTYT.style.animation ='fadeOut 0.5s forwards'
    }
})

function deleteServiceClick(){
    const serviceItems = document.querySelectorAll('.service-name-item')
    for(serviceItem of serviceItems){
        serviceItem.classList.remove('name-click')
    }
}

const dvsbh = document.querySelector('#dvsbh')
const dvgt = document.querySelector('#dvgt')
const spch = document.querySelector('#spch')
const serviceContent = document.querySelector('.service-content');
dvgt.addEventListener('click', ()=>{
    deleteServiceClick();
    dvgt.classList.add('name-click');
    serviceContent.innerHTML = `
    <div class="service">
        <div class="service-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/D09ED51BD87F8C7D94737C621FA2A4A1.jpg');">
        
        </div>
        <div class="service-title">
            Xe đã qua sử dụng
        </div>
    <p>Với mục tiêu mang lại sự yên tâm và đảm bảo cho khách hàng mua và bán xe cũ, Toyota Việt Nam chính thức giới thiệu dịch vụ kinh doanh...</p>
    <div class="service-seemore">XEM THÊM <i class="fa-solid fa-angle-right"></i></div>
    </div>
    <div class="service">
        <div class="service-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/D09ED51BD87F8C7D94737C621FA2A4A1.jpg');">
        
        </div>
        <div class="service-title">
        Bảo hiểm Toyota
        </div>
    <p>Bảo hiểm Toyota cung cấp một sản phẩm bảo hiểm chuyên biệt chỉ dành riêng cho khách hàng của Toyota....</p>
    <div class="service-seemore">XEM THÊM <i class="fa-solid fa-angle-right"></i></div>
    </div>
    <div class="service">
        <div class="service-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/D09ED51BD87F8C7D94737C621FA2A4A1.jpg');">
        
        </div>
        <div class="service-title">
            Dịch vụ tài chính
        </div>
    <p>Công ty Tài chính Toyota Việt Nam cung cấp các dịch vụ tài chính và góp phần xây dựng một cuộc sống thịnh vượng cho khách hàng và cộng đồng....</p>
    <div class="service-seemore">XEM THÊM <i class="fa-solid fa-angle-right"></i></div>
    </div>
    `
})
spch.addEventListener('click', ()=>{
    deleteServiceClick();
    spch.classList.add('name-click');
    serviceContent.innerHTML = `
    <div class="service">
        <div class="service-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/E6C0BFB50E4087F7E4B5F97EFD960117.png');">
        
        </div>
        <div class="service-title">
            Phụ kiện chính hãng
        </div>
        <p>Phụ kiện Chính hãng Toyota được thiết kế chuyên biệt để sử dụng trên từng mẫu xe Toyota. Mỗi Phụ...</p>
        <div class="service-seemore">XEM THÊM <i class="fa-solid fa-angle-right"></i></div>
    </div>
    `
})
dvsbh.addEventListener('click',()=>{
    deleteServiceClick();
    dvsbh.classList.add('name-click');
    serviceContent.innerHTML = `
    <div class="service">
        <div class="service-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/F1E4F720C673632E422E9DCF14BB94BA.jpg');">
        
        </div>
        <div class="service-title">
            Bảo dưỡng định kỳ
        </div>
    <p>Trong quá trình vận hành, nhiều chi tiết trên xe bị mài mòn hoặc hư hỏng theo thời gian sử dụng. Điều này xảy ra với bất kỳ cơ cấu máy móc...</p>
    <div class="service-seemore">XEM THÊM <i class="fa-solid fa-angle-right"></i></div>
    </div>
    <div class="service">
        <div class="service-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/69923668F01418A77976B0F361179B36.jpg');">
        
        </div>
        <div class="service-title">
        Dịch vụ sửa chữa
        </div>
    <p>Toyota cũng cung cấp dịch vụ sửa chữa đối với những hư hỏng do va chạm mà chiếc xe của bạn gặp phải trong quá trình sử dụng với kỹ thuật...</p>
    <div class="service-seemore">XEM THÊM <i class="fa-solid fa-angle-right"></i></div>
    </div>
    <div class="service">
        <div class="service-img-container" style="background-image: url('https://www.toyota.com.vn//Resources/Images/4BDD8473EEDB37C3F7E3BC2BD967433B.jpg');">
        
        </div>
        <div class="service-title">
            Dịch vụ chăm sóc làm đẹp xe
        </div>
    <p>Chăm sóc và làm đẹp tập trung vào thẩm mỹ, làm đẹp nội ngoại thất xe, mang lại các trải nghiệm cao cấp và sang trọng cho người dùng....</p>
    <div class="service-seemore">XEM THÊM <i class="fa-solid fa-angle-right"></i></div>
    </div>
    `
})

const navShowroom = document.querySelector('#nav-showroom-click')
const navShowroomItem = document.querySelector('.nav-showroom')
navShowroom.addEventListener('mouseenter', ()=>{
    navShowroomItem.classList.add('show')
    navShowroom.innerHTML = `VR Showroom<i class="ml4 special-icon fa-solid fa-angle-up"></i>`
})
const navShowroomContainer = document.querySelector('.nav-showroom-container')
navShowroomContainer.addEventListener('mouseleave',()=>{
    navShowroomItem.classList.remove('show');
    navShowroom.innerHTML = `VR Showroom<i class="ml4 special-icon fa-solid fa-angle-down"></i>`
})


function closeClick(){
    const navInfo = document.querySelector('.nav-info');
    navInfo.innerHTML = `
        <li class="nav-showroom-container">
            <a id="nav-showroom-click" href="#" class="nav-info-item">VR Showroom<i class="ml4 special-icon fa-solid fa-angle-down"></i></a>
            <div class="nav-showroom">
                <a href="#" class="nav-showroom-item">SUV - MPV</a>
                <a href="#" class="nav-showroom-item">Sedan - Bán tải</a>
            </div>
        </li>

        <li><a href="#" class="nav-info-item"><i class="fa-solid fa-globe red-global mr4"></i>Toyota toàn cầu </a></li>
        <li><a href="#" class="nav-info-item">Tìm đại lý </a></li>
        <li><a onclick="searchClick()" href="#" class="nav-info-item"><i class="special-icon fa-solid fa-magnifying-glass"></i></a></li>
        <li><a href="#" class="nav-info-item"><i class="fa-brands fa-facebook blue-fb"></i></a></li>
        <li><a href="#" class="nav-info-item"><i class="fa-brands fa-youtube red-yt"></i></a></li>
        `
}
function searchClick(){
    const navInfo = document.querySelector('.nav-info');
    navInfo.innerHTML = `
    <li><a href="#" class="nav-info-item"><i class="fa-solid fa-globe red-global mr4"></i>Toyota toàn cầu </a></li>
    <li><a onclick="closeClick()" href="#" class="nav-info-item"><i class="special-icon fa-solid fa-magnifying-glass"></i></a></li>
    <li><input class="nav-info-search-type" type="text" placeholder="Nhập nội dung tìm kiếm "></li>
    <li><a onclick="closeClick()" href="#" class="nav-info-item"><i class="fa-solid fa-xmark"></i></a></li>
    <li><a href="#" class="nav-info-item"><i class="fa-brands fa-facebook blue-fb"></i></a></li>
    <li><a href="#" class="nav-info-item"><i class="fa-brands fa-youtube red-yt"></i></a></li>
    `
}




