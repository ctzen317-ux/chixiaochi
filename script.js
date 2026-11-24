(() => {
  'use strict';

  const root = document.documentElement;
  const experience = document.getElementById('experience');
  const frontView = document.getElementById('frontView');
  const deskView = document.getElementById('deskView');
  const introContent = document.getElementById('intro');
  const enterButton = document.getElementById('enterDesk');
  const deskHint = document.getElementById('deskHint');
  const cameraBloom = document.getElementById('cameraBloom');
  const nameLine = document.querySelector('.intro__name');
  const romanLine = document.querySelector('.intro__roman');
  const nameTarget = document.querySelector('.intro__name [data-typewriter]');
  const romanTarget = document.querySelector('.intro__roman [data-typewriter]');
  const ctaPanel = document.querySelector('.intro__panel--right');
  const bookItem = document.querySelector('.desk-item--book');
  const bookArt = bookItem ? bookItem.querySelector('.desk-item__art') : null;
  const phoneItem = document.querySelector('.desk-item--phone');
  const folderItem = document.querySelector('.desk-item--folder');
  const galleryView = document.getElementById('photoGallery');
  const galleryBackdrop = document.getElementById('galleryBackdrop');
  const galleryBook = document.getElementById('galleryBook');
  const gallerySpread = document.getElementById('gallerySpread');
  const galleryLeftPage = document.getElementById('galleryLeftPage');
  const galleryRightPage = document.getElementById('galleryRightPage');
  const galleryTitle = document.getElementById('galleryTitle');
  const galleryPageStatus = document.getElementById('galleryPageStatus');
  const galleryPrev = document.getElementById('galleryPrev');
  const galleryNext = document.getElementById('galleryNext');
  const galleryClose = document.getElementById('galleryClose');
  const photoPreviewView = document.getElementById('photoPreview');
  const photoPreviewBackdrop = document.getElementById('photoPreviewBackdrop');
  const photoPreviewStage = document.getElementById('photoPreviewStage');
  const videoTheater = document.getElementById('videoTheater');
  const videoBackdrop = document.getElementById('videoBackdrop');
  const videoPhone = document.getElementById('videoPhone');
  const videoPhoneScreen = document.getElementById('videoPhoneScreen');
  const videoPhoneGlow = document.getElementById('videoPhoneGlow');
  const videoPhoneContent = document.getElementById('videoPhoneContent');
  const videoBack = document.getElementById('videoBack');
  const videoPlayer = document.getElementById('videoPlayer');
  const videoElement = document.getElementById('videoPlayerElement');
  const videoLoader = document.getElementById('videoLoader');
  const videoControls = document.getElementById('videoControls');
  const videoTitle = document.getElementById('videoTitle');
  const videoPlay = document.getElementById('videoPlay');
  const videoCurrentTime = document.getElementById('videoCurrentTime');
  const videoDuration = document.getElementById('videoDuration');
  const videoIndex = document.getElementById('videoIndex');
  const videoProgress = document.getElementById('videoProgress');
  const videoProgressBuffer = document.getElementById('videoProgressBuffer');
  const videoProgressFill = document.getElementById('videoProgressFill');
  const videoProgressThumb = document.getElementById('videoProgressThumb');
  const videoEpisodeToggle = document.getElementById('videoEpisodeToggle');
  const videoEpisodes = document.getElementById('videoEpisodes');
  const videoEpisodesDismiss = document.getElementById('videoEpisodesDismiss');
  const videoEpisodesPanel = document.getElementById('videoEpisodesPanel');
  const videoEpisodesClose = document.getElementById('videoEpisodesClose');
  const videoEpisodeList = document.getElementById('videoEpisodeList');
  const letterView = document.getElementById('letterView');
  const letterBackdrop = document.getElementById('letterBackdrop');
  const letterComposition = document.getElementById('letterComposition');
  const letterPaper = document.getElementById('letterPaper');
  const letterFolder = document.getElementById('letterFolder');
  const letterIntroBlock = document.getElementById('letterIntroBlock');
  const letterCategories = document.getElementById('letterCategories');
  const letterReadingPanel = document.getElementById('letterReadingPanel');
  const letterReadingKicker = document.getElementById('letterReadingKicker');
  const letterReadingTitle = document.getElementById('letterReadingTitle');
  const letterReadingBody = document.getElementById('letterReadingBody');
  const letterReadingStatus = document.getElementById('letterReadingStatus');
  const letterBack = document.getElementById('letterBack');
  const profileCard = document.getElementById('profileCard');
  const profileAvatar = document.getElementById('profileAvatar');
  const profileContacts = document.getElementById('profileContacts');
  const frontBackdrop = frontView.querySelector('.scene__bg--front');
  const deskBackdrop = deskView.querySelector('.scene__bg--desk');
  const deskObjects = deskView.querySelector('.desk-objects');

  if (
    !experience ||
    !frontView ||
    !deskView ||
    !introContent ||
    !enterButton ||
    !deskHint ||
    !bookItem ||
    !phoneItem ||
    !folderItem ||
    !galleryView ||
    !galleryBackdrop ||
    !galleryBook ||
    !gallerySpread ||
    !galleryLeftPage ||
    !galleryRightPage ||
    !galleryTitle ||
    !galleryPageStatus ||
    !galleryPrev ||
    !galleryNext ||
    !galleryClose ||
    !photoPreviewView ||
    !photoPreviewBackdrop ||
    !photoPreviewStage ||
    !videoTheater ||
    !videoBackdrop ||
    !videoPhone ||
    !videoPhoneScreen ||
    !videoPhoneGlow ||
    !videoPhoneContent ||
    !videoBack ||
    !videoPlayer ||
    !videoElement ||
    !videoLoader ||
    !videoControls ||
    !videoTitle ||
    !videoPlay ||
    !videoCurrentTime ||
    !videoDuration ||
    !videoIndex ||
    !videoProgress ||
    !videoProgressBuffer ||
    !videoProgressFill ||
    !videoProgressThumb ||
    !videoEpisodeToggle ||
    !videoEpisodes ||
    !videoEpisodesDismiss ||
    !videoEpisodesPanel ||
    !videoEpisodesClose ||
    !videoEpisodeList ||
    !letterView ||
    !letterBackdrop ||
    !letterComposition ||
    !letterPaper ||
    !letterFolder ||
    !letterIntroBlock ||
    !letterCategories ||
    !letterReadingPanel ||
    !letterReadingKicker ||
    !letterReadingTitle ||
    !letterReadingBody ||
    !letterReadingStatus ||
    !letterBack ||
    !profileCard ||
    !profileAvatar ||
    !profileContacts ||
    !frontBackdrop ||
    !deskBackdrop ||
    !deskObjects
  ) {
    return;
  }

  const gsap = window.gsap;
  const hasGSAP = Boolean(gsap && typeof gsap.timeline === 'function');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = Array.from(document.querySelectorAll('.desk-item'));
  const itemStates = new WeakMap();
  const nameText = nameTarget ? nameTarget.dataset.typewriter || nameTarget.textContent : '';
  const romanText = romanTarget ? romanTarget.dataset.typewriter || romanTarget.textContent : '';
  const wait = (milliseconds) => new Promise((resolve) => window.setTimeout(resolve, milliseconds));
  const photoFiles = [
    'works-photo/photo1.jpg',
    'works-photo/photo2.jpg',
    'works-photo/photo3.jpg',
    'works-photo/photo4.jpg',
    'works-photo/photo5.jpg',
    'works-photo/photo6.jpg',
    'works-photo/photo7.JPG',
    'works-photo/photo8.JPG',
    'works-photo/photo9.JPG',
    'works-photo/photo10.JPG',
    'works-photo/photo11.JPG',
    'works-photo/photo12.JPG',
    'works-photo/photo13.JPG',
    'works-photo/photo14.jpg',
    'works-photo/photo15.jpg',
    'works-photo/photo16.jpg',
    'works-photo/photo17.jpg',
    'works-photo/photo18.jpg',
    'works-photo/photo19.jpg',
  ];
  const photoFormats = [
    { key: '4x3' },
    { key: '3x4' },
    { key: '1x1' },
    { key: '3x2' },
    { key: '2x3' },
    { key: '16x9' },
  ];
  const videoWorks = [
    { category: '剪辑作品', title: '剪辑作品', src: 'https://ldc-portfolio-1540146891.cos.ap-chongqing.myqcloud.com/editing-works-ledscreenad.mp4' },
    { category: '剪辑作品', title: '剪辑作品2', src: 'https://ldc-portfolio-1540146891.cos.ap-chongqing.myqcloud.com/editing-works-yesoryeslyrics.mp4' },
    { category: '导演作品', title: '导演作品', src: 'https://ldc-portfolio-1540146891.cos.ap-chongqing.myqcloud.com/Directorialworks-C.mp4' },
    { category: 'C4D动画作品', title: 'C4D动画作品', src: 'https://ldc-portfolio-1540146891.cos.ap-chongqing.myqcloud.com/c4d-animation-works-windchimes.mp4' },
    { category: '广告作品', title: '广告作品1', src: 'https://ldc-portfolio-1540146891.cos.ap-chongqing.myqcloud.com/ad-happysnap.mp4' },
    { category: '广告作品', title: '广告作品2', src: 'https://ldc-portfolio-1540146891.cos.ap-chongqing.myqcloud.com/Ad-Watermelonfrost.mp4' },
    { category: '电视新闻专题作品', title: '电视新闻专题作品', src: 'https://ldc-portfolio-1540146891.cos.ap-chongqing.myqcloud.com/News-Feature-Rolling.mp4' },
  ];
  const letterWorks = [
    {
      category: '导演作品',
      title: '《她她》',
      description: '校园短片剧本 · 关于靠近与错过',
      file: 'works-text/she-she.txt',
    },
    {
      category: '随笔',
      title: '魔幻之都，魅力十足',
      description: '重庆 · 城市随笔',
      file: 'works-text/chongqing.txt',
    },
  ];
  const galleryCategoryDefinitions = [
    { title: '人像摄影', start: 14, end: 19, photosPerSpread: 4 },
    { title: '海报设计', start: 1, end: 6, photosPerSpread: 4 },
    { title: '风景摄影', start: 7, end: 13, photosPerSpread: 5 },
  ];
  const builtInPhotos = photoFiles.map((src, index) => {
    const noise = Math.sin((index + 1) * 12.9898 + 4.1414) * 43758.5453;
    const fraction = noise - Math.floor(noise);
    const number = index + 1;
    return {
      src,
      id: String(number),
      number,
      fallbackSrc: number === 1 ? 'works-photo/phot2.jpg' : '',
      tilt: Math.round((fraction * 10 - 5) * 10) / 10,
    };
  });
  const polaroidRotations = new WeakMap();
  const galleryCategories = buildGalleryCategories();
  const galleryPages = buildGalleryPages();

  let scene = 'front';
  let busy = false;
  let introStarted = false;
  let dragState = null;
  let wheelAccumulator = 0;
  let wheelResetTimer = 0;
  let resizeFrame = 0;
  let galleryPageIndex = 0;
  let galleryOpen = false;
  let galleryBusy = false;
  let lastGalleryTrigger = null;
  let photoPreviewOpen = false;
  let photoPreviewBusy = false;
  let photoPreviewTrigger = null;
  let photoPreviewCard = null;
  let photoPreviewFocusReturn = null;
  let videoOpen = false;
  let videoBusy = false;
  let videoActiveIndex = 0;
  let videoLoadToken = 0;
  let videoPlayerInitialized = false;
  let videoControlsTimer = 0;
  let videoTapStart = null;
  let videoSeekState = null;
  let videoSeekIgnoreClickUntil = 0;
  let videoSeekUiHoldUntil = 0;
  let videoWheelAccumulator = 0;
  let videoWheelResetTimer = 0;
  let videoEpisodesOpen = false;
  let lastVideoTrigger = null;
  let letterOpen = false;
  let letterBusy = false;
  let letterReading = false;
  let letterRequestId = 0;
  let lastLetterTrigger = null;
  let profileOpen = false;

  if (!hasGSAP) {
    root.classList.add('is-fallback');
  } else {
    root.classList.remove('is-fallback');
  }

  if (nameTarget) {
    nameTarget.textContent = '';
  }
  if (romanTarget) {
    romanTarget.textContent = '';
  }
  enterButton.disabled = true;

  const seconds = (value) => (reduceMotion ? 0.01 : value);
  const itemMargin = () => Math.max(10, Math.min(window.innerWidth, window.innerHeight) * 0.02);

  function applyItemPosition(item, state) {
    item.style.setProperty('--x', `${state.x.toFixed(2)}px`);
    item.style.setProperty('--y', `${state.y.toFixed(2)}px`);
  }

  function buildGalleryCategories() {
    return galleryCategoryDefinitions.map((category, categoryIndex) => {
      const formats = createFormatOrder((categoryIndex + 1) * 97 + category.start);
      const categoryPhotos = builtInPhotos
        .filter((photo) => photo.number >= category.start && photo.number <= category.end)
        .map((photo) => ({
          ...photo,
          categoryIndex,
          format: formats[(photo.number - category.start) % formats.length],
        }));

      return {
        title: category.title,
        photosPerSpread: category.photosPerSpread,
        photos: categoryPhotos,
      };
    });
  }

  function buildGalleryPages() {
    const pages = [];

    galleryCategories.forEach((category, categoryIndex) => {
      const photosPerSpread = Math.max(1, Number(category.photosPerSpread) || 5);
      const partCount = Math.max(1, Math.ceil(category.photos.length / photosPerSpread));

      for (let partIndex = 0; partIndex < partCount; partIndex += 1) {
        const start = partIndex * photosPerSpread;
        pages.push({
          title: category.title,
          categoryIndex,
          photos: category.photos.slice(start, start + photosPerSpread),
          partIndex,
          partCount,
        });
      }
    });

    return pages;
  }

  function bindPolaroidPreview(card) {
    const openPreview = (event) => {
      if (!galleryOpen || galleryBusy || photoPreviewOpen) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      openPhotoPreview(card);
    };

    card.addEventListener('click', openPreview);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        openPreview(event);
      }
    });
  }

  function finishPhotoPreviewClose() {
    const trigger = photoPreviewTrigger;

    photoPreviewStage.replaceChildren();
    photoPreviewView.classList.remove('is-open');
    photoPreviewView.setAttribute('aria-hidden', 'true');
    if (hasGSAP) {
      gsap.set(photoPreviewView, { clearProps: 'opacity,visibility' });
    } else {
      photoPreviewView.style.opacity = '';
      photoPreviewView.style.visibility = '';
    }

    if (trigger && trigger.isConnected) {
      trigger.classList.remove('is-previewing');
    }
    galleryBook.inert = false;
    const focusTarget = photoPreviewFocusReturn && photoPreviewFocusReturn.isConnected
      ? photoPreviewFocusReturn
      : galleryClose;
    photoPreviewOpen = false;
    photoPreviewBusy = false;
    photoPreviewTrigger = null;
    photoPreviewCard = null;
    photoPreviewFocusReturn = null;
    window.requestAnimationFrame(() => {
      if (!photoPreviewOpen && focusTarget && focusTarget.isConnected && !focusTarget.closest('[inert]')) {
        focusTarget.focus({ preventScroll: true });
      }
    });
  }

  function closePhotoPreview() {
    if (!photoPreviewOpen || photoPreviewBusy || !photoPreviewTrigger || !photoPreviewCard) {
      return;
    }

    const card = photoPreviewTrigger;
    const clone = photoPreviewCard;
    const rotation = polaroidRotations.get(card);
    if (rotation === undefined || !card.isConnected) {
      finishPhotoPreviewClose();
      return;
    }

    const returnRect = card.getBoundingClientRect();
    const cloneLeft = Number.parseFloat(clone.style.left) || 0;
    const cloneTop = Number.parseFloat(clone.style.top) || 0;
    const cloneWidth = Number.parseFloat(clone.style.width) || card.offsetWidth;
    const cloneHeight = Number.parseFloat(clone.style.height) || card.offsetHeight;
    const targetX = returnRect.left + returnRect.width / 2 - (cloneLeft + cloneWidth / 2);
    const targetY = returnRect.top + returnRect.height / 2 - (cloneTop + cloneHeight / 2);

    if (!hasGSAP || reduceMotion) {
      finishPhotoPreviewClose();
      return;
    }

    photoPreviewBusy = true;
    gsap.killTweensOf([photoPreviewView, clone]);
    gsap.timeline({ onComplete: finishPhotoPreviewClose })
      .to(clone, {
        x: targetX,
        y: targetY,
        scale: 1,
        rotation,
        duration: 0.5,
        ease: 'power3.inOut',
      }, 0)
      .to(photoPreviewView, {
        autoAlpha: 0,
        duration: 0.3,
        ease: 'power2.in',
      }, 0.2);
  }

  function openPhotoPreview(card) {
    if (!galleryOpen || galleryBusy || photoPreviewOpen || !card || !card.isConnected) {
      return;
    }

    const rotation = polaroidRotations.get(card);
    if (rotation === undefined) {
      return;
    }

    const startRect = card.getBoundingClientRect();
    const baseWidth = card.offsetWidth;
    const baseHeight = card.offsetHeight;
    if (startRect.width <= 0 || startRect.height <= 0 || baseWidth <= 0 || baseHeight <= 0) {
      return;
    }

    const spreadRect = gallerySpread.getBoundingClientRect();
    const startCenterX = startRect.left + startRect.width / 2;
    const startCenterY = startRect.top + startRect.height / 2;
    const targetCenterX = window.innerWidth / 2;
    const targetCenterY = window.innerHeight / 2;
    const maxWidth = Math.max(180, Math.min(window.innerWidth - 48, spreadRect.width * 0.94));
    const maxHeight = Math.max(180, Math.min(window.innerHeight - 72, spreadRect.height * 0.9));
    const targetScale = Math.max(0.72, Math.min(maxWidth / baseWidth, maxHeight / baseHeight));
    const currentScale = Number.parseFloat(getComputedStyle(card).getPropertyValue('--scale')) || 1;
    const deltaX = targetCenterX - startCenterX;
    const deltaY = targetCenterY - startCenterY;
    const clone = card.cloneNode(true);

    clone.classList.remove('is-previewing');
    clone.classList.add('photo-preview__card');
    clone.removeAttribute('data-photo-id');
    clone.removeAttribute('tabindex');
    clone.removeAttribute('role');
    clone.setAttribute('aria-hidden', 'true');
    clone.style.setProperty('--lift-y', '0px');
    clone.style.setProperty('--scale', '1');
    clone.style.setProperty('--tilt', `${rotation}deg`);
    clone.style.left = `${startCenterX - baseWidth / 2}px`;
    clone.style.top = `${startCenterY - baseHeight / 2}px`;
    clone.style.width = `${baseWidth}px`;
    clone.style.height = `${baseHeight}px`;
    clone.style.transform = `translate3d(0px, 0px, 0) rotate(${rotation}deg) scale(${currentScale})`;

    photoPreviewStage.replaceChildren(clone);
    photoPreviewTrigger = card;
    photoPreviewCard = clone;
    photoPreviewFocusReturn = document.activeElement instanceof HTMLElement && document.activeElement !== document.body
      ? document.activeElement
      : galleryClose;
    photoPreviewOpen = true;
    photoPreviewView.classList.add('is-open');
    photoPreviewView.setAttribute('aria-hidden', 'false');
    card.classList.add('is-previewing');
    galleryBook.inert = true;
    photoPreviewView.focus({ preventScroll: true });

    if (!hasGSAP || reduceMotion) {
      photoPreviewView.style.opacity = '1';
      clone.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) rotate(0deg) scale(${targetScale})`;
      photoPreviewBusy = false;
      return;
    }

    photoPreviewBusy = true;
    gsap.killTweensOf([photoPreviewView, clone]);
    gsap.set(photoPreviewView, { autoAlpha: 0 });
    gsap.set(clone, { x: 0, y: 0, scale: currentScale, rotation });
    gsap.timeline({
      onComplete: () => {
        photoPreviewBusy = false;
      },
    })
      .to(photoPreviewView, {
        autoAlpha: 1,
        duration: 0.28,
        ease: 'power2.out',
      }, 0)
      .to(clone, {
        x: deltaX,
        y: deltaY,
        scale: targetScale,
        rotation: 0,
        duration: 0.58,
        ease: 'power3.inOut',
      }, 0.02);
  }

  function createFormatOrder(seed) {
    const formats = [...photoFormats];
    let state = (seed * 2654435761) >>> 0;

    for (let index = formats.length - 1; index > 0; index -= 1) {
      state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
      const swapIndex = state % (index + 1);
      [formats[index], formats[swapIndex]] = [formats[swapIndex], formats[index]];
    }

    return formats;
  }

  function createPolaroidJitter(photoId) {
    let hash = 2166136261;

    for (let index = 0; index < photoId.length; index += 1) {
      hash ^= photoId.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }

    const horizontal = ((hash >>> 0) % 2001) / 1000 - 1;
    hash = Math.imul(hash ^ 0x9e3779b9, 16777619);
    const vertical = ((hash >>> 0) % 2001) / 1000 - 1;

    return {
      x: Math.round(horizontal * 12),
      y: Math.round(vertical * 18),
    };
  }

  function createPolaroid(photo) {
    const card = document.createElement('figure');
    const photoFrame = document.createElement('div');
    const image = document.createElement('img');
    const caption = document.createElement('figcaption');
    const markLoaded = () => {
      image.classList.add('is-loaded');
    };
    const rotation = photo.tilt;
    const jitter = createPolaroidJitter(photo.id);

    card.className = 'polaroid';
    card.classList.add(`polaroid--${photo.format.key}`);
    card.dataset.photoId = photo.id;
    card.dataset.photoNumber = String(photo.number);
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `放大预览第 ${photo.number} 张照片`);
    card.style.setProperty('--tilt', `${rotation}deg`);
    card.style.setProperty('--jig-x', `${jitter.x}px`);
    card.style.setProperty('--jig-y', `${jitter.y}px`);
    polaroidRotations.set(card, rotation);
    bindPolaroidPreview(card);

    photoFrame.className = 'polaroid__photo';
    image.className = 'polaroid__img';
    image.alt = `相册照片 ${photo.number}`;
    image.loading = 'eager';
    image.decoding = 'async';
    image.draggable = false;
    image.addEventListener('load', markLoaded, { once: true });
    image.addEventListener('error', () => {
      if (photo.fallbackSrc && card.dataset.fallbackApplied !== 'true') {
        card.dataset.fallbackApplied = 'true';
        image.src = photo.fallbackSrc;
        return;
      }

      card.classList.add('is-missing');
    });
    image.src = photo.src;
    if (image.complete) {
      markLoaded();
    }

    caption.className = 'polaroid__caption';
    caption.textContent = `No. ${String(photo.number).padStart(2, '0')}`;
    photoFrame.append(image);
    card.append(photoFrame, caption);

    return card;
  }

  function renderGalleryPage(pageIndex) {
    const clampedPage = Math.max(0, Math.min(pageIndex, galleryPages.length - 1));
    const page = galleryPages[clampedPage];
    const pagePhotos = page.photos;
    const leftCount = Math.ceil(pagePhotos.length / 2);
    const leftPhotos = pagePhotos.slice(0, leftCount);
    const rightPhotos = pagePhotos.slice(leftCount);

    galleryPageIndex = clampedPage;
    gallerySpread.dataset.category = String(page.categoryIndex);
    galleryTitle.textContent = page.title;
    galleryLeftPage.replaceChildren();
    galleryRightPage.replaceChildren();
    leftPhotos.forEach((photo) => galleryLeftPage.appendChild(createPolaroid(photo)));
    rightPhotos.forEach((photo) => galleryRightPage.appendChild(createPolaroid(photo)));
    galleryLeftPage.dataset.count = String(leftPhotos.length);
    galleryRightPage.dataset.count = String(rightPhotos.length);
    galleryPageStatus.textContent = `第 ${galleryPageIndex + 1} / ${galleryPages.length} 页`;
    galleryPrev.disabled = galleryPageIndex === 0;
    galleryNext.disabled = galleryPageIndex === galleryPages.length - 1;
    gallerySpread.scrollTop = 0;
  }

  function turnGalleryPage(direction) {
    if (!galleryOpen || galleryBusy || photoPreviewOpen) {
      return;
    }

    const nextPage = galleryPageIndex + direction;
    if (nextPage < 0 || nextPage >= galleryPages.length) {
      return;
    }

    if (!hasGSAP || reduceMotion) {
      renderGalleryPage(nextPage);
      return;
    }

    galleryBusy = true;
    const pages = [galleryLeftPage, galleryRightPage];
    gsap.to(pages, {
      opacity: 0,
      x: direction * -14,
      duration: 0.16,
      stagger: 0.025,
      ease: 'power1.in',
      onComplete: () => {
        renderGalleryPage(nextPage);
        gsap.fromTo(
          pages,
          { opacity: 0, x: direction * 14 },
          {
            opacity: 1,
            x: 0,
            duration: 0.28,
            stagger: 0.03,
            ease: 'power2.out',
            onComplete: () => {
              galleryBusy = false;
              gsap.set(pages, { clearProps: 'opacity,transform' });
            },
          },
        );
      },
    });
  }

  function openGallery() {
    if (galleryOpen || galleryBusy || scene !== 'desk' || busy || dragState || videoOpen || letterOpen) {
      return;
    }

    galleryOpen = true;
    galleryBusy = hasGSAP;
    lastGalleryTrigger = document.activeElement instanceof HTMLElement ? document.activeElement : bookItem;
    renderGalleryPage(0);
    experience.dataset.gallery = 'open';
    galleryView.classList.add('is-open');
    galleryView.setAttribute('aria-hidden', 'false');
    deskView.inert = true;
    frontView.inert = true;

    window.requestAnimationFrame(() => {
      galleryClose.focus({ preventScroll: true });
    });

    if (!hasGSAP) {
      galleryBusy = false;
      return;
    }

    gsap.killTweensOf([galleryView, galleryBook, galleryLeftPage, galleryRightPage]);
    if (bookArt) {
      gsap.killTweensOf(bookArt);
    }
    gsap.set(galleryView, { autoAlpha: 0 });
    gsap.set(galleryBook, {
      opacity: 1,
      scale: reduceMotion ? 1 : 0.8,
      y: reduceMotion ? 0 : 34,
      rotationX: reduceMotion ? 0 : 4,
      transformOrigin: '50% 60%',
    });
    gsap.set([galleryLeftPage, galleryRightPage], { clearProps: 'opacity,transform' });

    const timeline = gsap.timeline({
      onComplete: () => {
        galleryBusy = false;
      },
    });

    if (bookArt) {
      timeline.to(bookArt, {
        scale: 1.16,
        y: -8,
        duration: seconds(0.3),
        ease: 'power2.out',
      }, 0);
    }

    timeline
      .to(galleryView, {
        autoAlpha: 1,
        duration: seconds(0.34),
        ease: 'power2.out',
      }, seconds(0.16))
      .to(galleryBook, {
        scale: 1,
        y: 0,
        rotationX: 0,
        duration: seconds(0.64),
        ease: 'back.out(1.18)',
      }, seconds(0.18));
  }

  function finishGalleryClose() {
    galleryOpen = false;
    galleryBusy = false;
    galleryView.classList.remove('is-open');
    galleryView.setAttribute('aria-hidden', 'true');
    delete experience.dataset.gallery;
    deskView.inert = false;
    frontView.inert = false;

    if (hasGSAP) {
      gsap.set(galleryView, { clearProps: 'opacity,visibility' });
      gsap.set(galleryBook, { clearProps: 'opacity,transform' });
      gsap.set([galleryLeftPage, galleryRightPage], { clearProps: 'opacity,transform' });
      if (bookArt) {
        gsap.set(bookArt, { clearProps: 'transform' });
      }
    }

    const focusTarget = lastGalleryTrigger && lastGalleryTrigger.isConnected ? lastGalleryTrigger : bookItem;
    focusTarget.focus({ preventScroll: true });
    lastGalleryTrigger = null;
  }

  function closeGallery() {
    if (!galleryOpen || galleryBusy) {
      return;
    }

    galleryBusy = true;

    if (!hasGSAP) {
      finishGalleryClose();
      return;
    }

    const timeline = gsap.timeline({ onComplete: finishGalleryClose });
    timeline
      .to(galleryBook, {
        opacity: 0,
        scale: reduceMotion ? 1 : 0.8,
        y: reduceMotion ? 0 : 26,
        duration: seconds(0.32),
        ease: 'power2.in',
      }, 0)
      .to(galleryView, {
        autoAlpha: 0,
        duration: seconds(0.3),
        ease: 'power2.in',
      }, seconds(0.08));

    if (bookArt) {
      timeline.to(bookArt, {
        scale: 1,
        y: 0,
        duration: seconds(0.42),
        ease: 'power2.out',
      }, 0);
    }
  }

  function renderLetterCategories() {
    const fragment = document.createDocumentFragment();

    letterWorks.forEach((work, index) => {
      const button = document.createElement('button');
      button.className = 'letter-category';
      button.type = 'button';
      button.dataset.letterIndex = String(index);
      button.setAttribute('aria-label', `阅读${work.category}：${work.title}`);

      const number = document.createElement('span');
      number.className = 'letter-category__index';
      number.textContent = String(index + 1).padStart(2, '0');

      const copy = document.createElement('span');
      copy.className = 'letter-category__copy';
      const title = document.createElement('strong');
      title.textContent = work.category;
      const description = document.createElement('small');
      description.textContent = `${work.title} · ${work.description}`;
      copy.append(title, description);

      const arrow = document.createElement('span');
      arrow.className = 'letter-category__arrow';
      arrow.setAttribute('aria-hidden', 'true');
      arrow.textContent = '↗';

      button.append(number, copy, arrow);
      fragment.append(button);
    });

    letterCategories.replaceChildren(fragment);
  }

  function letterPeekSize() {
    const isCompact = window.innerWidth <= 760;
    const maxWidth = isCompact ? Math.min(window.innerWidth * 0.84, 380) : Math.min(window.innerWidth * 0.72, 460);
    const maxHeight = window.innerHeight * (isCompact ? 0.68 : 0.76);
    const width = Math.min(maxWidth, maxHeight * (1594 / 1923));
    return { width, height: width * (1923 / 1594) };
  }

  function letterReadSize() {
    const maxWidth = Math.min(window.innerWidth * 0.88, 760);
    const maxHeight = window.innerHeight * 0.82;
    const width = Math.min(maxWidth, maxHeight * (1594 / 1923));
    return { width, height: width * (1923 / 1594) };
  }

  function letterPaperStartY(paperHeight) {
    const folderRect = letterFolder.getBoundingClientRect();
    const paperTop = (window.innerHeight - paperHeight) / 2;
    return Math.max(120, folderRect.top - paperTop + 54);
  }

  function letterCompositionTarget(sourceRect) {
    const compositionRect = letterComposition.getBoundingClientRect();
    const folderRect = letterFolder.getBoundingClientRect();
    const compositionCenterX = compositionRect.left + compositionRect.width / 2;
    const compositionCenterY = compositionRect.top + compositionRect.height / 2;
    const folderCenterX = folderRect.left + folderRect.width / 2;
    const folderCenterY = folderRect.top + folderRect.height / 2;
    const rawScale = Math.min(
      sourceRect.width / Math.max(folderRect.width, 1),
      sourceRect.height / Math.max(folderRect.height, 1),
    );
    const scale = Math.max(0.08, Math.min(1, rawScale));
    const sourceCenterX = sourceRect.left + sourceRect.width / 2;
    const sourceCenterY = sourceRect.top + sourceRect.height / 2;

    return {
      scale,
      x: sourceCenterX - (compositionCenterX + (folderCenterX - compositionCenterX) * scale),
      y: sourceCenterY - (compositionCenterY + (folderCenterY - compositionCenterY) * scale),
    };
  }

  function applyLetterPeekLayout(immediate) {
    const peek = letterPeekSize();
    const startY = letterPaperStartY(peek.height);

    if (hasGSAP) {
      gsap.set(letterPaper, {
        width: peek.width,
        height: peek.height,
        xPercent: -50,
        yPercent: -50,
        x: 0,
        y: immediate ? startY : 0,
        rotation: 1.4,
        opacity: 1,
      });
    }

    if (!hasGSAP) {
      letterPaper.style.width = `${peek.width}px`;
      letterPaper.style.height = `${peek.height}px`;
      letterPaper.style.transform = immediate
        ? `translate(-50%, -50%) translateY(${startY}px) rotate(1.4deg)`
        : 'translate(-50%, -50%) rotate(1.4deg)';
      letterPaper.style.opacity = '1';
    }

    return { peek, startY };
  }

  function setLetterReadingState(isReading) {
    letterReading = isReading;
    letterComposition.classList.toggle('is-reading', isReading);
    letterReadingPanel.setAttribute('aria-hidden', String(!isReading));
  }

  function finishLetterOpen() {
    if (!letterOpen) {
      return;
    }

    letterBusy = false;
    const firstCategory = letterCategories.querySelector('.letter-category');
    (firstCategory || letterPaper).focus({ preventScroll: true });
  }

  function openLetter() {
    if (letterOpen || letterBusy || scene !== 'desk' || busy || dragState || galleryOpen || photoPreviewOpen || videoOpen) {
      return;
    }

    letterOpen = true;
    letterBusy = true;
    lastLetterTrigger = document.activeElement instanceof HTMLElement ? document.activeElement : folderItem;
    setLetterReadingState(false);
    letterReadingKicker.textContent = '';
    letterReadingTitle.textContent = '';
    letterReadingBody.textContent = '';
    letterReadingBody.scrollTop = 0;
    letterReadingStatus.textContent = '';
    experience.dataset.letter = 'open';
    letterView.classList.add('is-open');
    letterView.setAttribute('aria-hidden', 'false');
    deskView.inert = true;
    frontView.inert = true;
    galleryView.inert = true;
    videoTheater.inert = true;
    folderItem.classList.add('is-letter-source');

    const sourceRect = folderItem.getBoundingClientRect();
    const target = letterCompositionTarget(sourceRect);
    const { peek, startY } = applyLetterPeekLayout(true);

    if (!hasGSAP || reduceMotion) {
      letterBackdrop.style.opacity = '1';
      letterComposition.style.transform = 'none';
      letterFolder.style.opacity = '1';
      letterFolder.style.transform = 'translate(-50%, -50%) rotate(-3deg)';
      letterPaper.style.width = `${peek.width}px`;
      letterPaper.style.height = `${peek.height}px`;
      letterPaper.style.transform = 'translate(-50%, -50%) rotate(1.4deg)';
      letterIntroBlock.style.opacity = '1';
      letterCategories.style.opacity = '1';
      window.requestAnimationFrame(finishLetterOpen);
      return;
    }

    gsap.killTweensOf([letterBackdrop, letterComposition, letterPaper, letterFolder, letterIntroBlock, letterCategories]);
    gsap.set(letterBackdrop, { opacity: 0 });
    gsap.set(letterComposition, {
      x: target.x,
      y: target.y,
      scale: target.scale,
      transformOrigin: '50% 50%',
    });
    gsap.set(letterFolder, {
      xPercent: -50,
      yPercent: -50,
      x: 0,
      y: 0,
      scale: 1,
      rotation: -3,
      opacity: 1,
    });
    gsap.set([letterIntroBlock, letterCategories], { opacity: 0 });

    const timeline = gsap.timeline({ onComplete: finishLetterOpen });
    timeline
      .to(letterBackdrop, {
        opacity: 1,
        duration: seconds(0.34),
        ease: 'power2.out',
      }, 0)
      .to(letterComposition, {
        x: 0,
        y: 0,
        scale: 1,
        duration: seconds(0.96),
        ease: 'power3.inOut',
      }, 0)
      .to(letterPaper, {
        y: 0,
        duration: seconds(0.9),
        ease: 'power3.out',
      }, seconds(0.42))
      .to([letterIntroBlock, letterCategories], {
        opacity: 1,
        duration: seconds(0.34),
        ease: 'power2.out',
      }, seconds(1.06));
  }

  function finishLetterClose() {
    letterOpen = false;
    letterBusy = false;
    setLetterReadingState(false);
    letterRequestId += 1;
    letterView.classList.remove('is-open');
    letterView.setAttribute('aria-hidden', 'true');
    delete experience.dataset.letter;
    deskView.inert = false;
    frontView.inert = false;
    galleryView.inert = false;
    videoTheater.inert = false;
    folderItem.classList.remove('is-letter-source');
    letterReadingStatus.textContent = '';

    if (hasGSAP) {
      gsap.set(letterView, { clearProps: 'opacity,visibility' });
      gsap.set(letterBackdrop, { clearProps: 'opacity' });
      gsap.set(letterComposition, { clearProps: 'transform' });
      gsap.set(letterPaper, { clearProps: 'width,height,opacity,transform' });
      gsap.set(letterFolder, { clearProps: 'opacity,transform' });
      gsap.set([letterIntroBlock, letterCategories], { clearProps: 'opacity,transform' });
    } else {
      letterBackdrop.style.removeProperty('opacity');
      letterComposition.style.removeProperty('transform');
      letterPaper.style.removeProperty('width');
      letterPaper.style.removeProperty('height');
      letterPaper.style.removeProperty('transform');
      letterPaper.style.removeProperty('opacity');
      letterFolder.style.removeProperty('opacity');
      letterFolder.style.removeProperty('transform');
      letterIntroBlock.style.removeProperty('opacity');
      letterCategories.style.removeProperty('opacity');
    }

    const focusTarget = lastLetterTrigger && lastLetterTrigger.isConnected ? lastLetterTrigger : folderItem;
    focusTarget.focus({ preventScroll: true });
    lastLetterTrigger = null;
  }

  function closeLetter() {
    if (!letterOpen || letterBusy || letterReading) {
      return;
    }

    letterBusy = true;
    letterRequestId += 1;

    if (!hasGSAP || reduceMotion) {
      finishLetterClose();
      return;
    }

    const sourceRect = folderItem.getBoundingClientRect();
    const target = letterCompositionTarget(sourceRect);
    const { startY } = applyLetterPeekLayout(false);

    const timeline = gsap.timeline({ onComplete: finishLetterClose });
    timeline
      .to([letterIntroBlock, letterCategories], {
        opacity: 0,
        duration: seconds(0.18),
        ease: 'power1.in',
      }, 0)
      .to(letterPaper, {
        y: startY,
        duration: seconds(0.7),
        ease: 'power3.in',
      }, 0)
      .to(letterComposition, {
        x: target.x,
        y: target.y,
        scale: target.scale,
        duration: seconds(0.82),
        ease: 'power3.inOut',
      }, seconds(0.16))
      .to(letterBackdrop, {
        opacity: 0,
        duration: seconds(0.42),
        ease: 'power2.in',
      }, seconds(0.36));
  }

  async function openLetterReading(index) {
    if (!letterOpen || letterBusy || letterReading) {
      return;
    }

    const work = letterWorks[index];
    if (!work) {
      return;
    }

    letterBusy = true;
    setLetterReadingState(true);
    const requestId = ++letterRequestId;
    letterReadingKicker.textContent = `${String(index + 1).padStart(2, '0')} · ${work.category}`;
    letterReadingTitle.textContent = work.title;
    letterReadingBody.textContent = '正在打开信纸…';
    letterReadingBody.scrollTop = 0;
    letterReadingStatus.textContent = '';
    const readSize = letterReadSize();

    const finishReadingOpen = () => {
      if (!letterOpen || !letterReading || requestId !== letterRequestId) {
        return;
      }
      letterBusy = false;
      letterBack.focus({ preventScroll: true });
    };

    if (!hasGSAP || reduceMotion) {
      letterPaper.style.width = `${readSize.width}px`;
      letterPaper.style.height = `${readSize.height}px`;
      letterPaper.style.transform = 'translate(-50%, -50%) rotate(0deg)';
      letterFolder.style.opacity = '0';
      finishReadingOpen();
    } else {
      gsap.killTweensOf([letterPaper, letterFolder]);
      gsap.timeline({ onComplete: finishReadingOpen })
        .to(letterPaper, {
          width: readSize.width,
          height: readSize.height,
          y: 0,
          rotation: 0,
          duration: seconds(0.72),
          ease: 'power3.inOut',
        }, 0)
        .to(letterFolder, {
          opacity: 0,
          y: 64,
          scale: 0.9,
          duration: seconds(0.54),
          ease: 'power2.in',
        }, 0);
    }

    try {
      const response = await fetch(work.file, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`Unable to load ${work.file}`);
      }
      const text = (await response.text()).trim();
      if (!letterOpen || !letterReading || requestId !== letterRequestId) {
        return;
      }
      letterReadingBody.textContent = text || '这页信纸还是空的。';
      letterReadingBody.scrollTop = 0;
      letterReadingStatus.textContent = '';
    } catch {
      if (!letterOpen || !letterReading || requestId !== letterRequestId) {
        return;
      }
      letterReadingBody.textContent = '';
      letterReadingStatus.textContent = '这封信暂时没有取出来，请稍后再试。';
    }
  }

  function returnToLetterPeek() {
    if (!letterOpen || letterBusy || !letterReading) {
      return;
    }

    letterBusy = true;
    letterRequestId += 1;
    const peek = letterPeekSize();

    const finishReturn = () => {
      if (!letterOpen) {
        return;
      }
      setLetterReadingState(false);
      letterReadingBody.textContent = '';
      letterReadingStatus.textContent = '';
      letterBusy = false;
      const firstCategory = letterCategories.querySelector('.letter-category');
      if (firstCategory) {
        firstCategory.focus({ preventScroll: true });
      }
    };

    if (!hasGSAP || reduceMotion) {
      letterPaper.style.width = `${peek.width}px`;
      letterPaper.style.height = `${peek.height}px`;
      letterPaper.style.transform = 'translate(-50%, -50%) rotate(1.4deg)';
      letterFolder.style.opacity = '1';
      letterFolder.style.transform = 'translate(-50%, -50%) rotate(-3deg)';
      finishReturn();
      return;
    }

    gsap.killTweensOf([letterPaper, letterFolder]);
    gsap.timeline({ onComplete: finishReturn })
      .to(letterPaper, {
        width: peek.width,
        height: peek.height,
        y: 0,
        rotation: 1.4,
        duration: seconds(0.66),
        ease: 'power3.inOut',
      }, 0)
      .to(letterFolder, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: seconds(0.58),
        ease: 'power2.out',
      }, seconds(0.12));
  }

  function handleLetterBackdropClick() {
    if (!letterOpen || letterBusy) {
      return;
    }

    if (letterReading) {
      returnToLetterPeek();
    } else {
      closeLetter();
    }
  }

  function getVideoGroups() {
    const groups = [];
    const groupMap = new Map();

    videoWorks.forEach((work, index) => {
      let group = groupMap.get(work.category);
      if (!group) {
        group = { title: work.category, items: [] };
        groupMap.set(work.category, group);
        groups.push(group);
      }

      group.items.push({ work, index });
    });

    return groups;
  }

  function syncVideoEpisodeSelection(index = videoActiveIndex) {
    videoEpisodeList.querySelectorAll('.video-episode').forEach((button) => {
      const isActive = Number.parseInt(button.dataset.videoIndex || '', 10) === index;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
  }

  function renderVideoEpisodes() {
    const fragment = document.createDocumentFragment();

    getVideoGroups().forEach((group) => {
      const section = document.createElement('section');
      section.className = 'video-episode-group';

      const heading = document.createElement('p');
      heading.className = 'video-episode-group__title';
      heading.textContent = group.title;

      const items = document.createElement('div');
      items.className = 'video-episode-group__items';

      group.items.forEach(({ work, index }) => {
        const button = document.createElement('button');
        button.className = 'video-episode';
        button.type = 'button';
        button.dataset.videoIndex = String(index);
        button.setAttribute('aria-current', 'false');

        const number = document.createElement('span');
        number.className = 'video-episode__number';
        number.textContent = String(index + 1).padStart(2, '0');

        const name = document.createElement('span');
        name.className = 'video-episode__name';
        name.textContent = work.title;

        button.append(number, name);
        items.appendChild(button);
      });

      section.append(heading, items);
      fragment.appendChild(section);
    });

    videoEpisodeList.replaceChildren(fragment);
    syncVideoEpisodeSelection();
  }

  function closeVideoEpisodes({ restoreControls = true } = {}) {
    if (!videoEpisodesOpen) {
      return;
    }

    videoEpisodesOpen = false;
    videoEpisodes.classList.remove('is-open');
    videoEpisodes.setAttribute('aria-hidden', 'true');
    videoEpisodeToggle.setAttribute('aria-expanded', 'false');
    videoTapStart = null;

    if (restoreControls && videoOpen && !videoBusy) {
      showVideoControls();
    }
  }

  function openVideoEpisodes() {
    if (!videoOpen || videoBusy || videoEpisodesOpen || !videoWorks.length) {
      return;
    }

    videoEpisodesOpen = true;
    videoTapStart = null;
    window.clearTimeout(videoControlsTimer);
    videoControlsTimer = 0;
    hideVideoControls();
    syncVideoEpisodeSelection();
    videoEpisodes.classList.add('is-open');
    videoEpisodes.setAttribute('aria-hidden', 'false');
    videoEpisodeToggle.setAttribute('aria-expanded', 'true');
  }

  function switchVideoEpisode(index) {
    if (!videoOpen || videoBusy || !videoWorks[index]) {
      return;
    }

    closeVideoEpisodes({ restoreControls: false });
    loadVideoWork(index, { autoplay: true, revealControls: true });
  }

  function videoWorkTitle(index) {
    const work = videoWorks[index];
    return work ? `${String(index + 1).padStart(2, '0')}. ${work.title}` : '';
  }

  function formatVideoClock(value) {
    if (!Number.isFinite(value) || value < 0) {
      return '00:00';
    }

    const totalSeconds = Math.floor(value);
    const minutes = Math.floor(totalSeconds / 60);
    const secondsValue = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secondsValue).padStart(2, '0')}`;
  }

  function getActiveVideo() {
    return videoElement;
  }

  function setVideoLoading(isLoading, message = '正在装入小世界…') {
    videoPlayer.classList.toggle('is-loading', isLoading);
    if (message) {
      videoLoader.textContent = message;
    }
  }

  function setVideoPlayIcon(isPlaying) {
    videoPlay.textContent = isPlaying ? 'Ⅱ' : '▶';
    videoPlay.setAttribute('aria-label', isPlaying ? '暂停视频' : '播放视频');
  }

  function renderVideoProgressAt(percent, current, total) {
    const safePercent = Math.min(100, Math.max(0, Number.isFinite(percent) ? percent : 0));
    videoProgressFill.style.width = `${safePercent}%`;
    videoProgressThumb.style.left = `${safePercent}%`;
    videoProgress.setAttribute('aria-valuenow', String(Math.round(safePercent)));
    videoProgress.setAttribute('aria-valuetext', `${formatVideoClock(current)} / ${formatVideoClock(total)}`);
    videoCurrentTime.textContent = formatVideoClock(current);
    videoDuration.textContent = formatVideoClock(total);
  }

  function resetVideoProgress() {
    videoProgressBuffer.style.width = '0%';
    renderVideoProgressAt(0, 0, 0);
  }

  function updateVideoProgress(video) {
    if (!video) {
      return;
    }

    const total = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 0;
    const current = Number.isFinite(video.currentTime) && video.currentTime > 0 ? video.currentTime : 0;
    const percent = total > 0 ? Math.min(100, Math.max(0, (current / total) * 100)) : 0;

    renderVideoProgressAt(percent, current, total);

    if (video.buffered && video.buffered.length > 0) {
      const bufferedEnd = video.buffered.end(video.buffered.length - 1);
      const bufferedPercent = total > 0 ? Math.min(100, (bufferedEnd / total) * 100) : 0;
      videoProgressBuffer.style.width = `${bufferedPercent}%`;
    } else {
      videoProgressBuffer.style.width = '0%';
    }
  }

  function updateVideoChrome(index) {
    const work = videoWorks[index];
    if (!work) {
      return;
    }

    videoTitle.textContent = videoWorkTitle(index);
    videoIndex.textContent = `${String(index + 1).padStart(2, '0')} / ${String(videoWorks.length).padStart(2, '0')}`;
    syncVideoEpisodeSelection(index);
    videoElement.setAttribute('aria-label', videoWorkTitle(index));
    updateVideoProgress(videoElement);
    setVideoPlayIcon(!videoElement.paused);
  }

  function loadVideoWork(index, { autoplay = true, revealControls = true } = {}) {
    const work = videoWorks[index];
    if (!work) {
      return;
    }

    cancelVideoScrub();
    hideVideoControls();
    videoActiveIndex = index;
    syncVideoEpisodeSelection(index);
    resetVideoProgress();
    setVideoLoading(true, `正在装入「${work.title}」…`);

    const token = ++videoLoadToken;
    videoElement.addEventListener('canplay', () => {
      if (token !== videoLoadToken || !videoOpen) {
        return;
      }

      setVideoLoading(false);
      updateVideoChrome(index);
      if (revealControls) {
        showVideoControls();
      }
      if (autoplay) {
        attemptVideoPlay(videoElement);
      }
    }, { once: true });

    videoElement.pause();
    videoElement.src = work.src;
    videoElement.setAttribute('aria-label', videoWorkTitle(index));
    videoElement.load();
  }

  function navigateVideo(direction) {
    if (!videoOpen || videoBusy || videoEpisodesOpen) {
      return;
    }

    const nextIndex = Math.max(0, Math.min(videoActiveIndex + direction, videoWorks.length - 1));
    if (nextIndex !== videoActiveIndex) {
      loadVideoWork(nextIndex, { autoplay: true, revealControls: true });
    }
  }

  function initVideoPlayer() {
    if (videoPlayerInitialized) {
      return;
    }

    videoPlayerInitialized = true;
    videoElement.playsInline = true;
    videoElement.setAttribute('playsinline', '');
    videoElement.setAttribute('webkit-playsinline', '');

    videoElement.addEventListener('loadstart', () => {
      if (videoOpen) {
        setVideoLoading(true);
      }
    });
    videoElement.addEventListener('waiting', () => {
      if (videoOpen) {
        setVideoLoading(true);
      }
    });
    videoElement.addEventListener('stalled', () => {
      if (videoOpen) {
        setVideoLoading(true);
      }
    });
    videoElement.addEventListener('canplay', () => {
      if (videoOpen) {
        setVideoLoading(false);
      }
    });
    videoElement.addEventListener('loadedmetadata', () => {
      if (videoOpen) {
        updateVideoProgress(videoElement);
      }
    });
    videoElement.addEventListener('durationchange', () => {
      if (videoOpen) {
        updateVideoProgress(videoElement);
      }
    });
    videoElement.addEventListener('timeupdate', () => {
      if (videoOpen && !videoSeekState && performance.now() >= videoSeekUiHoldUntil) {
        updateVideoProgress(videoElement);
      }
    });
    videoElement.addEventListener('playing', () => {
      if (!videoOpen) {
        return;
      }

      setVideoLoading(false);
      setVideoPlayIcon(true);
      scheduleVideoControlsHide();
    });
    videoElement.addEventListener('play', () => {
      if (videoOpen) {
        setVideoPlayIcon(true);
        scheduleVideoControlsHide();
      }
    });
    videoElement.addEventListener('pause', () => {
      if (videoOpen) {
        setVideoPlayIcon(false);
      }
    });
    videoElement.addEventListener('ended', () => {
      if (videoOpen) {
        setVideoPlayIcon(false);
        showVideoControls();
      }
    });
    videoElement.addEventListener('error', () => {
      if (!videoOpen) {
        return;
      }

      setVideoLoading(true, '这段视频暂时没有加载出来');
      setVideoPlayIcon(false);
      showVideoControls();
    });
  }

  function hideVideoControls() {
    window.clearTimeout(videoControlsTimer);
    videoControlsTimer = 0;
    videoControls.classList.remove('is-visible');
    videoControls.setAttribute('aria-hidden', 'true');
  }

  function scheduleVideoControlsHide() {
    if (!videoOpen || videoEpisodesOpen || !videoControls.classList.contains('is-visible')) {
      return;
    }

    window.clearTimeout(videoControlsTimer);
    videoControlsTimer = 0;
    if (videoSeekState) {
      return;
    }

    videoControlsTimer = window.setTimeout(hideVideoControls, 3000);
  }

  function showVideoControls() {
    if (!videoOpen) {
      return;
    }

    videoControls.classList.add('is-visible');
    videoControls.setAttribute('aria-hidden', 'false');
    if (!videoEpisodesOpen) {
      scheduleVideoControlsHide();
    }
  }

  function attemptVideoPlay(video) {
    if (!video) {
      return;
    }

    const playAttempt = video.play();
    if (playAttempt && typeof playAttempt.catch === 'function') {
      playAttempt.catch(() => {
        if (getActiveVideo() === video) {
          setVideoPlayIcon(false);
        }
      });
    }
  }

  function toggleActiveVideo() {
    const video = getActiveVideo();
    if (!video) {
      return;
    }

    showVideoControls();
    if (video.paused) {
      attemptVideoPlay(video);
    } else {
      video.pause();
    }
  }

  function seekVideoAt(clientX) {
    const video = getActiveVideo();
    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) {
      return false;
    }

    const rect = videoProgress.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / Math.max(rect.width, 1)));
    const targetTime = Math.max(0, Math.min(video.duration, video.duration * ratio));

    renderVideoProgressAt(ratio * 100, targetTime, video.duration);
    videoSeekUiHoldUntil = performance.now() + 600;
    try {
      video.currentTime = targetTime;
    } catch {
      // Some browsers reject a seek before the media is ready; the UI still tracks the target.
    }
    return true;
  }

  function beginVideoScrub(event, mode, pointerId = null) {
    if (!videoOpen || videoBusy || videoSeekState) {
      return;
    }

    if (mode === 'mouse' && event.button !== 0) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const video = getActiveVideo();
    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) {
      return;
    }

    const wasPlaying = !video.paused;
    if (wasPlaying) {
      video.pause();
    }

    videoSeekState = {
      mode,
      pointerId,
      wasPlaying,
      moved: false,
      startX: event.clientX,
    };
    videoProgress.classList.add('is-scrubbing');

    if (mode === 'pointer' && pointerId !== null) {
      try {
        videoProgress.setPointerCapture(pointerId);
      } catch {
        // Pointer capture is optional; document-level mouse handlers cover the mouse path.
      }
    }

    seekVideoAt(event.clientX);
    showVideoControls();
  }

  function moveVideoScrub(clientX) {
    if (!videoSeekState) {
      return;
    }

    if (Math.abs(clientX - videoSeekState.startX) > 2) {
      videoSeekState.moved = true;
    }

    seekVideoAt(clientX);
    scheduleVideoControlsHide();
  }

  function endVideoScrub(mode, event = null) {
    if (!videoSeekState || videoSeekState.mode !== mode) {
      return;
    }

    if (mode === 'pointer' && event && videoSeekState.pointerId !== event.pointerId) {
      return;
    }

    const { wasPlaying, moved, pointerId } = videoSeekState;
    if (mode === 'pointer' && pointerId !== null && videoProgress.hasPointerCapture && videoProgress.hasPointerCapture(pointerId)) {
      videoProgress.releasePointerCapture(pointerId);
    }

    videoSeekState = null;
    videoProgress.classList.remove('is-scrubbing');
    videoSeekUiHoldUntil = performance.now() + 600;
    if (moved) {
      videoSeekIgnoreClickUntil = performance.now() + 350;
    }
    scheduleVideoControlsHide();

    if (wasPlaying) {
      const video = getActiveVideo();
      if (video) {
        attemptVideoPlay(video);
      }
    }
  }

  function cancelVideoScrub() {
    if (!videoSeekState) {
      return;
    }

    const { mode, pointerId } = videoSeekState;
    if (mode === 'pointer' && pointerId !== null && videoProgress.hasPointerCapture && videoProgress.hasPointerCapture(pointerId)) {
      videoProgress.releasePointerCapture(pointerId);
    }

    videoSeekState = null;
    videoProgress.classList.remove('is-scrubbing');
  }

  function handleVideoScrubMouseMove(event) {
    if (!videoSeekState || videoSeekState.mode !== 'mouse') {
      return;
    }

    if ((event.buttons & 1) === 0) {
      endVideoScrub('mouse', event);
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    moveVideoScrub(event.clientX);
  }

  function handleVideoScrubMouseUp(event) {
    if (!videoSeekState || videoSeekState.mode !== 'mouse') {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    endVideoScrub('mouse', event);
  }

  function finishVideoOpen() {
    if (!videoOpen) {
      return;
    }

    videoBusy = false;
    videoPhoneContent.classList.add('is-visible');
    if (hasGSAP) {
      gsap.set(videoPhoneContent, { opacity: 1, pointerEvents: 'auto' });
      gsap.set(videoPhoneScreen, { filter: 'brightness(1)' });
    }

    window.requestAnimationFrame(() => {
      videoTheater.focus({ preventScroll: true });
    });
  }

  function openVideoTheater() {
    if (videoOpen || videoBusy || scene !== 'desk' || busy || dragState || galleryOpen || photoPreviewOpen || letterOpen) {
      return;
    }

    videoOpen = true;
    videoBusy = true;
    lastVideoTrigger = document.activeElement instanceof HTMLElement ? document.activeElement : phoneItem;

    initVideoPlayer();
    loadVideoWork(0, { autoplay: true, revealControls: false });

    experience.dataset.video = 'open';
    videoTheater.classList.add('is-open');
    videoTheater.setAttribute('aria-hidden', 'false');
    deskView.inert = true;
    frontView.inert = true;
    galleryView.inert = true;
    phoneItem.classList.add('is-video-source');

    const sourceRect = phoneItem.getBoundingClientRect();
    const itemRotation = Number.parseFloat(getComputedStyle(phoneItem).getPropertyValue('--rotation')) || 0;
    const shellWidth = videoPhone.offsetWidth;
    const shellHeight = videoPhone.offsetHeight;
    const startScale = shellWidth && shellHeight
      ? Math.min(sourceRect.width / shellWidth, sourceRect.height / shellHeight)
      : 0.2;
    const startX = sourceRect.left + sourceRect.width / 2 - window.innerWidth / 2;
    const startY = sourceRect.top + sourceRect.height / 2 - window.innerHeight / 2;

    if (!hasGSAP || reduceMotion) {
      if (hasGSAP) {
        gsap.set(videoPhone, {
          xPercent: -50,
          yPercent: -50,
          x: 0,
          y: 0,
          scale: 1,
          rotation: 90,
          transformOrigin: '50% 50%',
        });
        gsap.set(videoTheater, { autoAlpha: 1 });
        gsap.set(videoPhoneGlow, { opacity: 0 });
      }
      window.setTimeout(finishVideoOpen, 30);
      return;
    }

    gsap.killTweensOf([videoTheater, videoBackdrop, videoPhone, videoPhoneContent, videoPhoneGlow, videoPhoneScreen]);
    gsap.set(videoBackdrop, { opacity: 0 });
    gsap.set(videoPhone, {
      xPercent: -50,
      yPercent: -50,
      x: startX,
      y: startY,
      scale: startScale,
      rotation: itemRotation,
      transformOrigin: '50% 50%',
    });
    gsap.set(videoPhoneContent, { opacity: 0, pointerEvents: 'none' });
    gsap.set(videoPhoneGlow, { opacity: 0 });
    gsap.set(videoPhoneScreen, { filter: 'brightness(0.48)' });

    const timeline = gsap.timeline({ onComplete: finishVideoOpen });
    timeline
      .to(videoBackdrop, {
        opacity: 1,
        duration: seconds(0.34),
        ease: 'power2.out',
      }, 0)
      .to(videoPhone, {
        scale: startScale * 1.075,
        duration: seconds(0.24),
        ease: 'power2.out',
      }, 0)
      .to(videoPhoneGlow, {
        opacity: 0.92,
        duration: seconds(0.22),
        ease: 'power1.out',
      }, 0)
      .to(videoPhoneScreen, {
        filter: 'brightness(1)',
        duration: seconds(0.5),
        ease: 'power1.out',
      }, seconds(0.08))
      .to(videoPhoneGlow, {
        opacity: 0,
        duration: seconds(0.55),
        ease: 'power2.inOut',
      }, seconds(0.23))
      .to(videoPhone, {
        x: 0,
        y: 0,
        scale: 1,
        rotation: 90,
        duration: seconds(1.05),
        ease: 'power3.inOut',
      }, seconds(0.32))
      .to(videoPhoneContent, {
        opacity: 1,
        duration: seconds(0.34),
        ease: 'power2.out',
      }, seconds(1.24));
  }

  function finishVideoClose() {
    closeVideoEpisodes({ restoreControls: false });
    videoOpen = false;
    videoBusy = false;
    videoTheater.classList.remove('is-open');
    videoTheater.setAttribute('aria-hidden', 'true');
    delete experience.dataset.video;
    videoPhoneContent.classList.remove('is-visible');
    videoControls.classList.remove('is-visible');
    videoControls.setAttribute('aria-hidden', 'true');
    deskView.inert = false;
    frontView.inert = false;
    galleryView.inert = false;
    phoneItem.classList.remove('is-video-source');
    window.clearTimeout(videoControlsTimer);
    videoControlsTimer = 0;
    videoTapStart = null;
    videoSeekState = null;
    videoSeekIgnoreClickUntil = 0;
    videoSeekUiHoldUntil = 0;
    videoWheelAccumulator = 0;
    videoProgress.classList.remove('is-scrubbing');
    window.clearTimeout(videoWheelResetTimer);

    if (hasGSAP) {
      gsap.set(videoTheater, { clearProps: 'opacity,visibility' });
      gsap.set(videoBackdrop, { clearProps: 'opacity' });
      gsap.set(videoPhone, { clearProps: 'transform' });
      gsap.set(videoPhoneContent, { clearProps: 'opacity,pointer-events' });
      gsap.set(videoPhoneGlow, { clearProps: 'opacity' });
      gsap.set(videoPhoneScreen, { clearProps: 'filter' });
    }

    const focusTarget = lastVideoTrigger && lastVideoTrigger.isConnected ? lastVideoTrigger : phoneItem;
    focusTarget.focus({ preventScroll: true });
    lastVideoTrigger = null;
  }

  function closeVideoTheater() {
    if (!videoOpen || videoBusy) {
      return;
    }

    closeVideoEpisodes({ restoreControls: false });
    videoBusy = true;
    window.clearTimeout(videoControlsTimer);
    videoControlsTimer = 0;
    videoLoadToken += 1;
    videoElement.pause();
    setVideoLoading(false);
    videoPhoneContent.classList.remove('is-visible');
    videoPhoneContent.style.pointerEvents = 'none';

    if (!hasGSAP || reduceMotion) {
      window.setTimeout(finishVideoClose, 30);
      return;
    }

    const sourceRect = phoneItem.getBoundingClientRect();
    const itemRotation = Number.parseFloat(getComputedStyle(phoneItem).getPropertyValue('--rotation')) || 0;
    const shellWidth = videoPhone.offsetWidth;
    const shellHeight = videoPhone.offsetHeight;
    const endScale = shellWidth && shellHeight
      ? Math.min(sourceRect.width / shellWidth, sourceRect.height / shellHeight)
      : 0.2;
    const endX = sourceRect.left + sourceRect.width / 2 - window.innerWidth / 2;
    const endY = sourceRect.top + sourceRect.height / 2 - window.innerHeight / 2;

    const timeline = gsap.timeline({ onComplete: finishVideoClose });
    timeline
      .to(videoPhoneContent, {
        opacity: 0,
        duration: seconds(0.2),
        ease: 'power1.in',
      }, 0)
      .to(videoPhoneScreen, {
        filter: 'brightness(0.4)',
        duration: seconds(0.65),
        ease: 'power2.inOut',
      }, seconds(0.1))
      .to(videoPhone, {
        x: endX,
        y: endY,
        scale: endScale,
        rotation: itemRotation,
        duration: seconds(0.95),
        ease: 'power3.inOut',
      }, seconds(0.12))
      .to(videoPhoneGlow, {
        opacity: 0,
        duration: 0.1,
      }, 0)
      .to(videoTheater, {
        autoAlpha: 0,
        duration: seconds(0.38),
        ease: 'power2.in',
      }, seconds(0.64));
  }

  function keepItemInside(item) {
    const state = itemStates.get(item);
    if (!state) {
      return;
    }

    const margin = itemMargin();
    const rect = item.getBoundingClientRect();
    let shiftX = 0;
    let shiftY = 0;

    if (rect.left < margin) {
      shiftX += margin - rect.left;
    }
    if (rect.right > window.innerWidth - margin) {
      shiftX -= rect.right - (window.innerWidth - margin);
    }
    if (rect.top < margin) {
      shiftY += margin - rect.top;
    }
    if (rect.bottom > window.innerHeight - margin) {
      shiftY -= rect.bottom - (window.innerHeight - margin);
    }

    if (shiftX !== 0 || shiftY !== 0) {
      state.x += shiftX;
      state.y += shiftY;
      applyItemPosition(item, state);
    }
  }

  function clampAllItems() {
    if (scene !== 'desk') {
      return;
    }
    items.forEach(keepItemInside);
  }

  function cancelDrag() {
    if (!dragState) {
      return;
    }

    const { item, pointerId } = dragState;
    dragState = null;
    item.classList.remove('is-dragging');
    item.style.zIndex = '';

    if (item.hasPointerCapture && item.hasPointerCapture(pointerId)) {
      item.releasePointerCapture(pointerId);
    }
  }

  function finishEnter() {
    deskView.setAttribute('aria-hidden', 'false');
    frontView.setAttribute('aria-hidden', 'true');
    frontView.style.pointerEvents = 'none';
    deskView.style.pointerEvents = 'auto';
    frontView.style.zIndex = '';
    deskView.style.zIndex = '';

    if (hasGSAP) {
      gsap.set(frontView, { visibility: 'hidden' });
    }

    scene = 'desk';
    busy = false;
    clampAllItems();

    window.requestAnimationFrame(() => {
      deskView.focus({ preventScroll: true });
    });
  }

  function finishLeave() {
    deskView.setAttribute('aria-hidden', 'true');
    frontView.setAttribute('aria-hidden', 'false');
    frontView.style.pointerEvents = 'auto';
    deskView.style.pointerEvents = 'none';
    frontView.style.zIndex = '';
    deskView.style.zIndex = '';

    if (hasGSAP) {
      gsap.set(deskView, { visibility: 'hidden' });
    }

    scene = 'front';
    busy = false;
    enterButton.disabled = false;
    enterButton.focus({ preventScroll: true });
  }

  function enterDesk() {
    if (busy || scene !== 'front') {
      return;
    }

    busy = true;
    enterButton.disabled = true;
    experience.dataset.scene = 'desk';
    frontView.style.pointerEvents = 'none';

    if (!hasGSAP) {
      window.setTimeout(finishEnter, reduceMotion ? 30 : 1220);
      return;
    }

    const motion = reduceMotion ? 0.6 : 1;
    const cameraTime = (value) => (reduceMotion ? Math.max(value * 0.7, 0.01) : value);
    gsap.killTweensOf([frontView, deskView, introContent, frontBackdrop, deskBackdrop, deskObjects, cameraBloom]);
    frontView.style.zIndex = '3';
    deskView.style.zIndex = '2';

    gsap.set(frontView, {
      visibility: 'visible',
      opacity: 1,
      scale: 1,
      yPercent: 0,
      xPercent: 0,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      filter: 'none',
      transformOrigin: '50% 100%',
      force3D: true,
    });
    gsap.set(deskView, {
      visibility: 'visible',
      opacity: 0,
      scale: motion ? 0.58 : 1,
      yPercent: motion ? -46 : 0,
      rotationX: motion ? -38 : 0,
      rotationY: motion ? 8 : 0,
      rotationZ: motion ? 5 : 0,
      filter: 'none',
      transformOrigin: '50% 18%',
      force3D: true,
    });
    gsap.set(frontBackdrop, {
      scale: 1.002,
      yPercent: 0,
      force3D: true,
    });
    gsap.set(deskBackdrop, {
      scale: motion ? 1.3 : 1.05,
      yPercent: motion ? -8 : 0,
      force3D: true,
    });
    gsap.set(introContent, {
      opacity: 1,
      yPercent: 0,
      scale: 1,
      filter: 'none',
      transformOrigin: '50% 58%',
      force3D: true,
    });
    gsap.set(deskObjects, {
      opacity: 0,
      yPercent: motion ? -9 : 0,
      scale: motion ? 0.92 : 1,
      force3D: true,
    });
    gsap.set(cameraBloom, { opacity: 0 });

    const timeline = gsap.timeline({
      defaults: { ease: 'power2.inOut' },
      onComplete: finishEnter,
    });

    timeline
      .to(frontView, {
        scale: motion ? 1.24 : 1,
        yPercent: motion ? 5 : 0,
        xPercent: motion ? 1 : 0,
        rotationX: motion ? 38 : 0,
        rotationY: motion ? -8 : 0,
        rotationZ: motion ? -3.5 : 0,
        duration: cameraTime(1.04),
      }, 0)
      .to(frontView, {
        opacity: 0,
        duration: cameraTime(0.44),
      }, cameraTime(0.72))
      .to(frontBackdrop, {
        scale: motion ? 1.12 : 1.002,
        yPercent: motion ? -4 : 0,
        duration: cameraTime(0.98),
      }, 0)
      .to(introContent, {
        yPercent: motion ? -15 : 0,
        scale: motion ? 0.88 : 1,
        duration: cameraTime(0.98),
      }, 0)
      .to(deskView, {
        opacity: 1,
        scale: 1,
        yPercent: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        duration: cameraTime(1.12),
      }, cameraTime(0.05))
      .to(deskBackdrop, {
        scale: 1.05,
        yPercent: 0,
        duration: cameraTime(1.1),
      }, cameraTime(0.06))
      .to(deskObjects, {
        opacity: 1,
        yPercent: 0,
        scale: 1,
        duration: cameraTime(0.86),
      }, cameraTime(0.26));

    if (!reduceMotion) {
      timeline
        .to(cameraBloom, { opacity: 0.26, duration: cameraTime(0.3) }, cameraTime(0.48))
        .to(cameraBloom, { opacity: 0, duration: cameraTime(0.42) }, cameraTime(0.8));
    }
  }

  function leaveDesk() {
    if (busy || scene !== 'desk' || galleryOpen || videoOpen || letterOpen) {
      return;
    }

    busy = true;
    cancelDrag();
    experience.dataset.scene = 'front';
    deskView.style.pointerEvents = 'none';

    if (!hasGSAP) {
      window.setTimeout(finishLeave, reduceMotion ? 30 : 1220);
      return;
    }

    const motion = reduceMotion ? 0.6 : 1;
    const cameraTime = (value) => (reduceMotion ? Math.max(value * 0.7, 0.01) : value);
    gsap.killTweensOf([frontView, deskView, introContent, frontBackdrop, deskBackdrop, deskObjects, cameraBloom]);
    frontView.style.zIndex = '2';
    deskView.style.zIndex = '3';

    gsap.set(frontView, {
      visibility: 'visible',
      opacity: 0,
      scale: motion ? 0.74 : 1,
      yPercent: motion ? 18 : 0,
      xPercent: 0,
      rotationX: motion ? -34 : 0,
      rotationY: motion ? 7 : 0,
      rotationZ: motion ? 4 : 0,
      filter: 'none',
      transformOrigin: '50% 100%',
      force3D: true,
    });
    gsap.set(introContent, {
      opacity: 1,
      yPercent: motion ? 6 : 0,
      scale: motion ? 0.97 : 1,
      filter: 'none',
      transformOrigin: '50% 58%',
      force3D: true,
    });
    gsap.set(deskView, {
      visibility: 'visible',
      opacity: 1,
      scale: 1,
      yPercent: 0,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      filter: 'none',
      transformOrigin: '50% 50%',
      force3D: true,
    });
    gsap.set(frontBackdrop, {
      scale: motion ? 1.06 : 1.002,
      yPercent: motion ? 2 : 0,
      force3D: true,
    });
    gsap.set(deskBackdrop, {
      scale: 1.05,
      yPercent: 0,
      force3D: true,
    });
    gsap.set(deskObjects, {
      opacity: 1,
      yPercent: 0,
      scale: 1,
      force3D: true,
    });
    gsap.set(cameraBloom, { opacity: 0 });

    const timeline = gsap.timeline({
      defaults: { ease: 'power2.inOut' },
      onComplete: finishLeave,
    });

    timeline
      .to(deskView, {
        opacity: 0,
        scale: motion ? 0.56 : 1,
        yPercent: motion ? -48 : 0,
        rotationX: motion ? -38 : 0,
        rotationY: motion ? 8 : 0,
        rotationZ: motion ? 5 : 0,
        duration: cameraTime(1.1),
      }, 0)
      .to(deskBackdrop, {
        scale: motion ? 1.26 : 1.05,
        yPercent: motion ? -7 : 0,
        duration: cameraTime(0.98),
      }, 0)
      .to(deskObjects, {
        opacity: 0,
        yPercent: motion ? -10 : 0,
        scale: motion ? 0.92 : 1,
        duration: cameraTime(0.8),
      }, 0)
      .to(frontView, {
        opacity: 1,
        scale: 1,
        yPercent: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        duration: cameraTime(1.16),
      }, cameraTime(0.02))
      .to(frontBackdrop, {
        scale: 1.002,
        yPercent: 0,
        duration: cameraTime(1.06),
      }, 0)
      .to(introContent, {
        yPercent: 0,
        scale: 1,
        duration: cameraTime(1.04),
      }, cameraTime(0.2));

    if (!reduceMotion) {
      timeline
        .to(cameraBloom, { opacity: 0.22, duration: cameraTime(0.28) }, cameraTime(0.32))
        .to(cameraBloom, { opacity: 0, duration: cameraTime(0.38) }, cameraTime(0.72));
    }
  }

  function waitForFonts() {
    if (!document.fonts || !document.fonts.ready) {
      return Promise.resolve();
    }

    return Promise.race([
      document.fonts.ready.catch(() => undefined),
      wait(1400),
    ]);
  }

  async function typeText(target, text, line, characterDelay) {
    if (!target || !text) {
      return;
    }

    target.style.visibility = 'visible';

    if (line) {
      line.classList.add('is-typing');
    }

    const effectiveDelay = reduceMotion ? Math.max(55, characterDelay * 0.55) : characterDelay;

    for (const character of Array.from(text)) {
      target.textContent += character;
      await wait(effectiveDelay);
    }

    if (line) {
      line.classList.remove('is-typing');
    }
  }

  async function playIntro() {
    if (introStarted) {
      return;
    }

    introStarted = true;
    await waitForFonts();
    await typeText(nameTarget, nameText, nameLine, 180);
    await wait(260);
    await typeText(romanTarget, romanText, romanLine, 82);
    await wait(500);

    if (ctaPanel) {
      ctaPanel.classList.add('is-visible');
    }
    enterButton.disabled = false;
  }

  function handleWheel(event) {
    if (scene !== 'desk' || busy || dragState || galleryOpen || videoOpen || letterOpen) {
      return;
    }

    if (event.deltaY <= 0) {
      wheelAccumulator = 0;
      return;
    }

    wheelAccumulator += event.deltaY;
    window.clearTimeout(wheelResetTimer);
    wheelResetTimer = window.setTimeout(() => {
      wheelAccumulator = 0;
    }, 180);

    if (wheelAccumulator >= 32) {
      wheelAccumulator = 0;
      leaveDesk();
    }
  }

  function handleKeydown(event) {
    if (letterOpen) {
      if (event.key === 'Escape') {
        event.preventDefault();
        if (letterReading) {
          returnToLetterPeek();
        } else {
          closeLetter();
        }
      }
      return;
    }

    if (videoOpen) {
      if (videoEpisodesOpen) {
        if (event.key === 'Escape') {
          event.preventDefault();
          closeVideoEpisodes();
        }
        return;
      }

      if (event.key === 'Escape') {
        event.preventDefault();
        closeVideoTheater();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        navigateVideo(-1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        navigateVideo(1);
      } else if ((event.key === ' ' || event.key.toLowerCase() === 'k') && !(event.target instanceof HTMLElement && event.target.closest('button'))) {
        event.preventDefault();
        toggleActiveVideo();
      }
      return;
    }

    if (photoPreviewOpen) {
      if (event.key === 'Escape') {
        event.preventDefault();
        closePhotoPreview();
      }
      return;
    }

    if (galleryOpen) {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeGallery();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        turnGalleryPage(-1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        turnGalleryPage(1);
      }
      return;
    }

    if (event.key === 'Escape' && scene === 'desk' && !busy && !dragState) {
      event.preventDefault();
      leaveDesk();
    }
  }

  items.forEach((item) => {
    const state = { x: 0, y: 0 };
    itemStates.set(item, state);

    item.addEventListener('pointerdown', (event) => {
      if (scene !== 'desk' || busy || galleryOpen || videoOpen || letterOpen || (event.pointerType === 'mouse' && event.button !== 0)) {
        return;
      }

      event.preventDefault();

      dragState = {
        item,
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        baseX: state.x,
        baseY: state.y,
        moved: false,
      };

      item.setPointerCapture(event.pointerId);
      item.classList.add('is-dragging');
      item.style.zIndex = '30';
    });

    item.addEventListener('pointermove', (event) => {
      if (!dragState || dragState.item !== item || dragState.pointerId !== event.pointerId) {
        return;
      }

      event.preventDefault();
      state.x = dragState.baseX + event.clientX - dragState.startX;
      state.y = dragState.baseY + event.clientY - dragState.startY;
      if (Math.hypot(event.clientX - dragState.startX, event.clientY - dragState.startY) > 6) {
        dragState.moved = true;
      }
      applyItemPosition(item, state);
      keepItemInside(item);
    });

    const endDrag = (event) => {
      if (!dragState || dragState.item !== item || dragState.pointerId !== event.pointerId) {
        return;
      }

      const moved = dragState.moved;
      cancelDrag();
      keepItemInside(item);

      if (event.type === 'pointerup' && !moved) {
        if (item === bookItem) {
          event.preventDefault();
          openGallery();
        } else if (item === phoneItem) {
          event.preventDefault();
          openVideoTheater();
        } else if (item === folderItem) {
          event.preventDefault();
          openLetter();
        }
      }
    };

    item.addEventListener('pointerup', endDrag);
    item.addEventListener('pointercancel', endDrag);
    item.addEventListener('lostpointercapture', endDrag);

    const art = item.querySelector('img');
    if (art && !art.complete) {
      art.addEventListener('load', clampAllItems, { once: true });
    }
  });

  function setProfileCardOpen(open) {
    profileOpen = Boolean(open);
    profileCard.classList.toggle('is-open', profileOpen);
    profileAvatar.setAttribute('aria-expanded', String(profileOpen));
    profileAvatar.setAttribute('aria-label', profileOpen ? '收起联系方式' : '查看联系方式');
    profileContacts.setAttribute('aria-hidden', String(!profileOpen));
  }

  profileAvatar.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    setProfileCardOpen(!profileOpen);
  });

  profileAvatar.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'mouse') {
      setProfileCardOpen(true);
    }
  });

  profileCard.addEventListener('pointerleave', (event) => {
    if (event.pointerType === 'mouse') {
      setProfileCardOpen(false);
    }
  });

  profileCard.addEventListener('pointerdown', (event) => {
    event.stopPropagation();
  });

  profileCard.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  profileCard.addEventListener('focusout', (event) => {
    if (!profileCard.contains(event.relatedTarget)) {
      setProfileCardOpen(false);
    }
  });

  document.addEventListener('pointerdown', (event) => {
    if (profileOpen && event.target instanceof Node && !profileCard.contains(event.target)) {
      setProfileCardOpen(false);
    }
  });

  renderVideoEpisodes();
  renderLetterCategories();
  enterButton.addEventListener('click', enterDesk);
  deskHint.addEventListener('click', leaveDesk);
  bookItem.addEventListener('click', (event) => {
    if (event.detail === 0) {
      openGallery();
    }
  });
  phoneItem.addEventListener('click', (event) => {
    if (event.detail === 0) {
      openVideoTheater();
    }
  });
  folderItem.addEventListener('click', (event) => {
    if (event.detail === 0) {
      openLetter();
    }
  });
  videoBack.addEventListener('click', closeVideoTheater);
  videoBack.addEventListener('pointerdown', (event) => {
    event.stopPropagation();
  });
  videoBackdrop.addEventListener('click', () => {
    if (videoEpisodesOpen) {
      closeVideoEpisodes();
      return;
    }

    closeVideoTheater();
  });
  videoEpisodeToggle.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (videoEpisodesOpen) {
      closeVideoEpisodes();
    } else {
      openVideoEpisodes();
    }
  });
  videoEpisodeToggle.addEventListener('pointerdown', (event) => {
    event.stopPropagation();
  });
  videoEpisodesDismiss.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeVideoEpisodes();
  });
  videoEpisodesClose.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeVideoEpisodes();
  });
  videoEpisodeList.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target.closest('.video-episode') : null;
    if (!target || !videoEpisodeList.contains(target)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    const index = Number.parseInt(target.dataset.videoIndex || '', 10);
    if (Number.isInteger(index)) {
      switchVideoEpisode(index);
    }
  });
  const stopVideoEpisodeBubble = (event) => {
    event.stopPropagation();
  };
  [videoEpisodes, videoEpisodesPanel].forEach((episodeSurface) => {
    episodeSurface.addEventListener('pointerdown', stopVideoEpisodeBubble);
    episodeSurface.addEventListener('pointermove', stopVideoEpisodeBubble);
    episodeSurface.addEventListener('pointerup', stopVideoEpisodeBubble);
    episodeSurface.addEventListener('pointercancel', stopVideoEpisodeBubble);
    episodeSurface.addEventListener('click', stopVideoEpisodeBubble);
    episodeSurface.addEventListener('wheel', stopVideoEpisodeBubble, { passive: true });
  });
  letterBackdrop.addEventListener('click', handleLetterBackdropClick);
  letterBack.addEventListener('click', returnToLetterPeek);
  letterCategories.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target.closest('.letter-category') : null;
    if (!target || !letterCategories.contains(target)) {
      return;
    }

    const index = Number.parseInt(target.dataset.letterIndex || '', 10);
    if (Number.isInteger(index)) {
      void openLetterReading(index);
    }
  });
  videoPlay.addEventListener('click', toggleActiveVideo);
  videoPlay.addEventListener('pointerdown', (event) => {
    event.stopPropagation();
  });
  videoPhoneContent.addEventListener('pointerdown', (event) => {
    if (!videoOpen || videoBusy || videoEpisodesOpen || (event.pointerType === 'mouse' && event.button !== 0)) {
      return;
    }

    if (event.target instanceof Element && event.target.closest('button, [role="slider"], .video-controls__bottom')) {
      videoTapStart = null;
      return;
    }

    videoTapStart = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
    };
  });
  videoPhoneContent.addEventListener('pointermove', (event) => {
    if (!videoOpen || videoEpisodesOpen) {
      return;
    }

    if (videoTapStart && videoTapStart.pointerId === event.pointerId) {
      if (Math.hypot(event.clientX - videoTapStart.x, event.clientY - videoTapStart.y) > 8) {
        videoTapStart.moved = true;
      }
    }

    scheduleVideoControlsHide();
  });
  videoPhoneContent.addEventListener('pointerup', (event) => {
    if (!videoOpen || videoBusy || videoEpisodesOpen || !videoTapStart || videoTapStart.pointerId !== event.pointerId) {
      videoTapStart = null;
      return;
    }

    const start = videoTapStart;
    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    const moved = start.moved || Math.hypot(deltaX, deltaY) > 8;
    videoTapStart = null;

    if (Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY) * 1.15) {
      navigateVideo(deltaX < 0 ? 1 : -1);
      return;
    }

    if (moved || (event.target instanceof Element && event.target.closest('button, [role="slider"], .video-controls__bottom'))) {
      return;
    }

    showVideoControls();
    const video = getActiveVideo();
    if (video && video.paused) {
      attemptVideoPlay(video);
    }
  });
  videoPhoneContent.addEventListener('pointercancel', () => {
    videoTapStart = null;
  });
  videoPhoneContent.addEventListener('focusin', () => {
    scheduleVideoControlsHide();
  });
  videoPhoneContent.addEventListener('wheel', (event) => {
    if (!videoOpen || videoEpisodesOpen) {
      return;
    }

    event.preventDefault();
    const delta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
    if (Math.abs(delta) < 1) {
      return;
    }

    videoWheelAccumulator += delta;
    window.clearTimeout(videoWheelResetTimer);
    videoWheelResetTimer = window.setTimeout(() => {
      videoWheelAccumulator = 0;
    }, 220);

    if (Math.abs(videoWheelAccumulator) >= 35) {
      const direction = videoWheelAccumulator > 0 ? 1 : -1;
      videoWheelAccumulator = 0;
      navigateVideo(direction);
    }
  }, { passive: false });
  videoProgress.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse') {
      event.stopPropagation();
      return;
    }

    beginVideoScrub(event, 'pointer', event.pointerId);
  });
  videoProgress.addEventListener('pointermove', (event) => {
    if (!videoSeekState || videoSeekState.mode !== 'pointer' || videoSeekState.pointerId !== event.pointerId) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    moveVideoScrub(event.clientX);
  });
  const finishPointerVideoSeek = (event) => {
    if (!videoSeekState || videoSeekState.mode !== 'pointer' || videoSeekState.pointerId !== event.pointerId) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    endVideoScrub('pointer', event);
  };
  videoProgress.addEventListener('pointerup', finishPointerVideoSeek);
  videoProgress.addEventListener('pointercancel', finishPointerVideoSeek);
  videoProgress.addEventListener('mousedown', (event) => {
    beginVideoScrub(event, 'mouse');
  });
  document.addEventListener('mousemove', handleVideoScrubMouseMove);
  document.addEventListener('mouseup', handleVideoScrubMouseUp);
  videoProgress.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!videoOpen || videoBusy || performance.now() < videoSeekIgnoreClickUntil) {
      return;
    }

    seekVideoAt(event.clientX);
    showVideoControls();
  });
  videoProgress.addEventListener('keydown', (event) => {
    if (!videoOpen || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      return;
    }

    const video = getActiveVideo();
    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    if (event.key === 'Home') {
      video.currentTime = 0;
    } else if (event.key === 'End') {
      video.currentTime = Math.max(0, video.duration - 0.05);
    } else {
      const direction = event.key === 'ArrowLeft' ? -1 : 1;
      video.currentTime = Math.max(0, Math.min(video.duration, video.currentTime + direction * 5));
    }

    updateVideoProgress(video);
    showVideoControls();
  });
  galleryBackdrop.addEventListener('click', closeGallery);
  photoPreviewBackdrop.addEventListener('click', closePhotoPreview);
  galleryClose.addEventListener('click', closeGallery);
  galleryPrev.addEventListener('click', () => turnGalleryPage(-1));
  galleryNext.addEventListener('click', () => turnGalleryPage(1));
  window.addEventListener('wheel', handleWheel, { passive: true });
  window.addEventListener('keydown', handleKeydown);
  window.addEventListener('resize', () => {
    window.cancelAnimationFrame(resizeFrame);
    resizeFrame = window.requestAnimationFrame(() => {
      clampAllItems();
      if (letterOpen && !letterBusy) {
        const size = letterReading ? letterReadSize() : letterPeekSize();
        if (hasGSAP) {
          gsap.set(letterPaper, { width: size.width, height: size.height });
        } else {
          letterPaper.style.width = `${size.width}px`;
          letterPaper.style.height = `${size.height}px`;
        }
      }
    });
  });

  window.requestAnimationFrame(clampAllItems);

  if (document.readyState === 'complete') {
    playIntro();
  } else {
    window.addEventListener('load', playIntro, { once: true });
  }
})();
