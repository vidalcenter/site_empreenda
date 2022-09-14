function Demo_Mosaic_2() {
        jQuery("#nanogallery").nanogallery2({
        
          // CONTENT SOURCE
          // The optional add-on nanoPhotosProvider is used for this example - this is not mandatory and can easily be replaced by a list of medias
          kind: 'nano_photos_provider2',
          dataProvider: 'https://nano.gallery/ngy2/demo2/nano_photos_provider2/nano_photos_provider2.php',
          album: 'fun',
          galleryDisplayTransitionDuration: 1500,
         
          // GALLERY AND THUMBNAIL LAYOUT
          galleryMosaic : [                       // default layout
             { "w": 16, "h": 18, "c": 1,  "r": 1  },
             { "w": 8,  "h": 9,  "c": 21, "r": 5  },
             { "w": 4,  "h": 6,  "c": 28, "r": 2  },
             { "w": 4,  "h": 6,  "c": 19, "r": 11 },
             { "w": 6,  "h": 8,  "c": 27, "r": 10 }
          ],
          galleryMosaicXS : [                     // layout for XS width
             { "w": 6, "h": 9, "c": 1,  "r": 1  },
             { "w": 4,  "h": 4,  "c": 9, "r": 3  },
             { "w": 2,  "h": 3,  "c": 12, "r": 1  },
             { "w": 2,  "h": 3,  "c": 8, "r": 5 },
             { "w": 3,  "h": 4,  "c": 12, "r": 6 }
          ],
          galleryMosaicSM : [                     // layout for SM width
             { "w": 6, "h": 9, "c": 1,  "r": 1  },
             { "w": 4,  "h": 4,  "c": 9, "r": 3  },
             { "w": 2,  "h": 3,  "c": 12, "r": 1  },
             { "w": 2,  "h": 3,  "c": 8, "r": 5 },
             { "w": 3,  "h": 4,  "c": 12, "r": 6 }
          ],
          galleryMaxRows: 1,
          galleryDisplayMode: 'rows',
          gallerySorting: 'random',
          thumbnailDisplayOrder: 'random',

          thumbnailAlignment: 'scaled',
          thumbnailHeight: 100, thumbnailWidth: 100,
          thumbnailGutterWidth: 0, thumbnailGutterHeight: 0,
          thumbnailBorderHorizontal: 0, thumbnailBorderVertical: 0,

          thumbnailToolbarImage : null,
          thumbnailToolbarAlbum: null,

          thumbnailLabel: { display: false },
          
          // DISPLAY ANIMATION
          galleryDisplayTransition: 'rotateX',        // gallery display animation
          galleryDisplayTransitionDuration: 1500,
          thumbnailDisplayTransition: 'scaleUp',     // thumbnail display animation
          thumbnailDisplayTransitionDuration: 600,
          thumbnailDisplayInterval: 30,


          // HOVER ANIMATION
          thumbnailBuildInit2: '.nGY2GThumbnailAlbumTitle_border-left_5px solid #23CB99|.nGY2GThumbnailAlbumTitle_margin_20px|\
                title_backgroundColor_rgba(200,200,200,0.8)|title_color_#000',
          thumbnailHoverEffect2: 'image_scale_1.00_1.15_500_bounce|image_rotateZ_0deg_05deg',
          touchAnimation: true,
          touchAutoOpenDelay: 500,

          // LIGHTBOX
          viewerToolbar:    {   // bottom toolbar
            display: true,
            standard:  'label',
            minimized: 'label' },
          viewerTools:    {
            topLeft:   '',
            topRight:  'rotateLeft, rotateRight, fullscreenButton, closeButton'
          },
      
          // DEEP LINKING
          locationHash: false
        });
      }
