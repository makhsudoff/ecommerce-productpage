const modifiers = {
  imgThumbnailActive: 'img-showcase__thumbnail--active',
  lightboxpen: 'lightbox--open'
};

// IMG SHOWCASE

const elImgShowcaseActiveImg = document.querySelector('.img-showcase__active-img');
const elsImgShowcaseThumbnailButton = document.querySelectorAll('.js-img-showcase-thumbnail-button');
const elsImgThumbnail = document.querySelectorAll('.img-showcase__thumbnail');

elsImgShowcaseThumbnailButton.forEach(function (elButton) {
  elButton.addEventListener('click', function () {
    // Remove active state from all buttons
    elsImgThumbnail.forEach(function (elImgThumbnail) {
      elImgThumbnail.classList.remove(modifiers.imgThumbnailActive);
    });


    // Add active state to clicked button
    elButton.parentElement.classList.add(modifiers.imgThumbnailActive);

    // Update active img src accordingly
    elImgShowcaseActiveImg.src = elButton.dataset.imgShowcaseBig;
    console.log(elButton.dataset.imgShowcaseBig);
  });
});

// LIGHTBOX
const elLightboxToggler = document.querySelector('.js-lighbox-toggler');
const elLightBox = document.querySelector('.lightbox');
const elLightBoxClose = document.querySelector('.js-lightbox-close');

if (elLightboxToggler) {
  elLightboxToggler.addEventListener('click', function () {
    elLightBox.classList.add(modifiers.lightboxpen);
  });
}

if (elLightBoxClose) {
  elLightBoxClose.addEventListener('click', function () {
    elLightBox.classList.remove(modifiers.lightboxpen);
  });
}
const elProductPageGallery = document.querySelector('.product-page__gallery');
const elImgLightboxActiveImg = elLightBox.querySelector('.img-showcase__active-img');
const elsImgLightboxThumbnailButton = elLightBox.querySelectorAll('.js-img-lightbox-thumbnail-button');
const elsLightboxThumbnail = elLightBox.querySelectorAll('.img-showcase__thumbnail');

elsImgLightboxThumbnailButton.forEach(function (elButton) {
  elButton.addEventListener('click', function () {
    // Remove active state from all buttons
    elsLightboxThumbnail.forEach(function (elImgThumbnail) {
      elImgThumbnail.classList.remove(modifiers.imgThumbnailActive);
    });


    // Add active state to clicked button
    elButton.parentElement.classList.add(modifiers.imgThumbnailActive);

    // Update active img src accordingly
    elImgLightboxActiveImg.src = elButton.dataset.imgShowcaseBig;
    console.log(elButton.dataset.imgShowcaseBig);
  });
});

// Lightbox control
const elLightBoxControlPrev = elLightBox.querySelector('.js-lightbox__control-prev');
const elLightBoxControlNext = elLightBox.querySelector('.js-lightbox__control-next');

if (elLightBoxControlNext) {
  elLightBoxControlNext.addEventListener('click', function () {
    // Find active li element
    const elActiveItem = elLightBox.querySelector('.img-showcase__thumbnail--active')

    // Remove li active element styles
    elActiveItem.classList.remove(modifiers.imgThumbnailActive)
    
    let elNextActiveItem;

    if (elActiveItem.nextElementSibling === null) {
      elNextActiveItem = elsLightboxThumbnail[0];
    } else {
      elNextActiveItem = elActiveItem.nextElementSibling;
    }

    elNextActiveItem.classList.add(modifiers.imgThumbnailActive);

    // Check if there are any elements after this element
    if (elActiveItem.nextElementSibling) {
      console.log(elActiveItem.nextElementSibling);
      // Make next element active
    elActiveItem.nextElementSibling.classList.add(modifiers.imgThumbnailActive);
    }

    // Update active img src accordingly
    elImgLightboxActiveImg.src = elNextActiveItem.querySelector('.img-showcase__thumbnail-button').dataset.imgShowcaseBig;
    console.log(elNextActiveItem.dataset.imgShowcaseBig);
  });
}

// Lightbox control prev
if (elLightBoxControlPrev) {
  elLightBoxControlPrev.addEventListener('click', function () {
    // Find active li element
    const elActiveItem = elLightBox.querySelector('.img-showcase__thumbnail--active')

    // Remove li active element styles
    elActiveItem.classList.remove(modifiers.imgThumbnailActive)
    
    let elPrevActiveItem;

    if (elActiveItem.previousElementSibling === null) {
      elPrevActiveItem = elsLightboxThumbnail[3];
    } else {
      elPrevActiveItem = elActiveItem.previousElementSibling;
    }

    elPrevActiveItem.classList.add(modifiers.imgThumbnailActive);

    // Check if there are any elements after this element
    if (elActiveItem.previousElementSibling) {
      console.log(elActiveItem.previousElementSibling);
      // Make next element active
    elActiveItem.previousElementSibling.classList.add(modifiers.imgThumbnailActive);
    }

    // Update active img src accordingly
    elImgLightboxActiveImg.src = elPrevActiveItem.querySelector('.img-showcase__thumbnail-button').dataset.imgShowcaseBig;
    console.log(elPrevActiveItem.dataset.imgShowcaseBig);
  });
}

// PRODUCT COUNT
const elProductQtyDecrementButton = document.querySelector('.js-product-quantity-decrement-button');
const elProductQtyIncrementButton = document.querySelector('.js-product-quantity-increment-button');
const elProductInfoQty = document.querySelector('.product-info__quantity');

if (elProductQtyIncrementButton) {
  elProductQtyIncrementButton.addEventListener('click', function () {
    elProductInfoQty.textContent = parseInt(elProductInfoQty.textContent, 10) + 1;
  });
}

if (elProductQtyDecrementButton) {
  elProductQtyDecrementButton.addEventListener('click', function () {
    const qty = parseInt(elProductInfoQty.textContent, 10);
    if (qty > 0) {
      elProductInfoQty.textContent = qty - 1;
    }
  });
}

