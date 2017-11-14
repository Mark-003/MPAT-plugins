/**
 *
 * Copyright (c) 2017 MPAT Consortium , All rights reserved.
 * Fraunhofer FOKUS, Fincons Group, Telecom ParisTech, IRT, Lacaster University, Leadin, RBB, Mediaset
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library. If not, see <http://www.gnu.org/licenses/>.
 *
 * AUTHORS:
 * Jean-Philippe Ruijs (jean-philippe.ruijs@telecom.paristech.fr)
 *
 **/
/**
 * original english l10n file
 */
const en = {
  appMgr: {
    exclude: 'Exclude',
    navModels: {
      slideflow: 'SlideFlow navigation allows the content creator to design full-screen application pages, and specify the order in which they are presented. The user experience is similar to browsing through a PowerPoint slide presentation.<br />While pages can contain selectable hotspots to provide additional content and information related to the currently presented page, navigation between the individual pages is sequential, allowing the content creator to build upon information presented on earlier pages and establish a narrative flow.',
      timeline: 'Event based navigation enables the presentation of HbbTV content to be driven by the broadcast programme. The most common example is the presentation of a red button at the start of a TV programme or advert to alert the viewer that additional information is available. While the appearance of the button is usually triggered by MPEG stream events, alternative channels. e.g. web sockets or application pull-requests, can be used as well.<br/>Event based navigation is best suited for small information inserts.',
      website: 'This model is most commonly used for HbbTV apps. From a landing page users access additional content by selecting on screen buttons using the arrow keys - similar to a website. Often shortcut colour/numeric buttons can be used as well.<br/>Although this model is common it is not well suited to digital storytelling as the users path is arbitrary, therefore, each page needs to be able to stand on its own.'
    }
  },
  navModel: {
    sampleApp: 'Sample Application',
    components: 'Components'
  },
  componentLoader: {
    containerTitle: {
      label: 'Container styles'
    },
    fontSize: {
      label: 'Font Size',
      placeholder: 'size in px'
    },
    fontWeight: {
      label: 'Text Weight',
      placeholder: 'number from 100 to 900'
    },
    border: {
      label: 'Border',
      placeholder: 'css border notation (e.g.: 1px solid #000)'
    },
    borderRadius: {
      label: 'Border Radius',
      placeholder: 'size in px'
    },
    margin: {
      label: 'Margin',
      placeholder: 'size in px'
    },
    padding: {
      label: 'Padding',
      placeholder: 'size in px'
    },
    color: {
      label: 'Text Color'
    },
    backgroundColor: {
      label: 'Background Color'
    },
    lineHeight: {
      label: 'Line Height',
      placeHolder: 'Line height in px'
    }
  },
  formTypes: {
    fontSize: {
      label: 'Font Size',
      placeholder: '14pt'
    },
    fontWeight: {
      label: 'Text Weight',
      placeholder: 'number form 100 to 900'
    },
    border: {
      label: 'Border',
      placeholder: '1px solid #000'
    },
    borderRadius: {
      label: 'Border Radius',
      placeholder: '5px'
    },
    margin: {
      label: 'Margin',
      placeholder: '0px'
    },
    padding: {
      label: 'Padding',
      placeholder: '0px'
    },
    color: {
      label: 'Text Color',
      placeholder: 'rgba() notation, HEX notation, color name'
    },
    backgroundColor: {
      label: 'Background Color',
      placeholder: 'rgba() notation, HEX notation, color name'
    }
  },
  componentStateSelector: {
    enter: 'Trigger when pressing OK on this item',
    focus: 'Trigger when item is focused',
    chooseAnAction: 'Choose an action',
    assetFinderPlaceholder: "TYPE ASSET NAME"
  },
  pageSelector: {
    loading: 'LOADING',
    select: 'SELECT',
    noTitle: 'no title',
    error: 'ERROR'

  },
  styles: {
    choose: 'Choose',
    typeUrlOrSelectMedia: 'type url or select media',
    ttSize: 'Size in px, em, rem, pt, %',
    ttChoose: 'Select the option you wish to use',
    ttImage: 'Typme image url or choose from media library'
  },
  stylesPopup: {
    done: 'Done'
  },
  textSubmit: {
    ok: 'OK'
  },
  hotSpotEdit: {
    edit: 'edit',
    title: 'Hot Spot Icon',
    active: 'Active',
    background: 'Background',
    icon: 'Icon',
    orCustomFile: 'or custom file',
    focused: 'Focused',
    normal: 'Normal',
    iconColour: 'Icon colour',
    contentPosition: 'Content Position',
    location: 'Location',
    overTheIcon: 'Over the icon',
    underTheIcon: 'Under the icon',
    static: 'Absolute / static',
    staticContentPosition: 'Static Content Position',
    top: 'Top',
    left: 'Left',
    contentSize: 'Content Size (px)',
    width: 'Width',
    height: 'Height',
    ifEmptyFitContent: 'if empty it will fit to the content',
    keyBinding: 'Key Binding',
    done: 'Done',
    or: 'OR',
    defaultIfAvailable: 'default, if available',
    customIcon: 'Custom icon',
    choose: 'Choose',
    selectRemoteButton: 'Select remote button'
  },
  imageCropper: {
    cropRatio: 'Crop Ratio',
    cropImage: 'Crop image',
    restore: 'Restore',
    crop: 'Crop',
    free: 'Free',
    ttCropRatio: 'Select crop ratio',
    ttCropImage: '[tooltip Crop image]',
    ttRestore: 'Undo crop changes',
    ttCrop: 'Crop to selection',
    ttFree: '[tooltip Free]'
  },
  layoutBuilder: {
    unused: 'Unused',
    returnToPageEditor: 'RETURN TO PAGE EDITOR',
    save: 'SAVE',
    layoutBuilder: 'Layout Builder',
    width: 'Width',
    height: 'Height',
    left: 'Left',
    top: 'Top',
    layoutTitle: 'Layout Title',
    placeholderTitle: 'ENTER TITLE HERE',
    previewBackground: 'Preview Background',
    placeholderBg: 'TYPE URL OR RGB',
    selectFile: 'Select File',
    addAnotherBox: 'Add another box',
    add: 'Add',
    showSafeArea: 'SHOW SAFE ZONE',
    showGridLines: 'SHOW GRID LINES',
    layoutUsedInPages: 'LAYOUT USED IN PAGES',
    ttDeleteThisBox: 'Delete this box',
    ttPinBox: 'Lock the location of this box',
    ttTitle: 'Give this layout a title so you can easily identify it',
    ttPreviewBg: 'Add a temporary background so you can align your layout',
    ttAddBox: 'Add a box to the layout',
    ttSafeZone: 'Toggle the border markings, which show the \'safe\' internal area to place your boxes',
    ttGridLines: 'Toggle the gridlines, which help you align your layout'
  },
  undoRedo: {
    undo: 'UNDO',
    redo: 'REDO'
  },
  gallery: {
    removeImage: 'Remove Image',
    gallerySettings: 'Gallery Settings',
    orientation: 'Orientation',
    horizontal: 'Horizontal',
    vertical: 'Vertical',
    imageCover: 'Image Cover',
    zoomToFit: 'Images zoomed to fit container',
    autoPlay: 'Autoplay',
    ms: 'Milliseconds',
    repeat: 'Repeat',
    loop: 'Loop',
    useMediaKeys: 'Use media keys',
    dots: 'Dots',
    arrows: 'Arrows',
    chooseImages: 'Choose Images',
    clearSelections: 'Clear Selections',
    noImages: 'No Images',
    closeCropEditor: 'Close crop editor',
    ttOrient: 'Which axis should the images scroll along',
    ttImageCover: 'Zoom images to fit the container',
    ttAutoplay: 'Auto play the images on page load after n milliseconds',
    ttRepeat: 'Loop the images',
    ttUseMediaKeys: 'Use the media keys on the controller to navigate the gallery',
    ttDots: 'Show dots under/beside the gallery for navigation',
    ttArrows: 'Show arrows to navigate the gallery',
    ttClear: 'Clear the gallery images selections'

  },
  stateEditor: {
    title: 'State Editor',
    stateManagement: 'State Management',
    saveAsTemplate: 'Save As Template',
    txtToggleStateDisplay: 'State',
    ttTitle: '[tooltip title]',
    phTitle: 'Insert state title'
  },
  pageModelCreator: {
    chooseCustomBox: 'Choose Customizable Boxes',
    boxNb: 'Box Nb',
    isItEditable: 'Editable',
    editableOrStyles: 'Editable styles',
    addOrRemoveFromAllowedTypes: 'Add or Remove from allowed types',
    allowedTypes: 'Allowed types',
    compontentTypeToAddOrRemove: 'Component type to add or remove',
    any: 'ANY',
    cancel: 'Cancel',
    create: 'Create'
  },
  pageEditor: {
    title: 'Page Editor',
    pageTitle: 'Page Title',
    pageLink: 'Page Link',
    pageLayout: 'Page Layout',
    pageParent: 'Page Parent',
    pageStyles: 'Page Styles',
    pageBg: 'Page Background',
    scheduleUpdate: 'Schedule Update',
    unsavedChanges: 'You have unsaved changes',
    untitled: 'Untitled',
    errorWhileSaving: 'Error while saving',
    confirmLeave: 'You have unsaved changes, do you really want to leave the page ?',
    chooseBgColor: 'Choose Background Color',
    showHide: 'Show / Hide',
    or: 'OR',
    movedToStyle: 'Page background color and media have been moved to page styles',
    createModelFromPage: 'Create Model from Page',
    changeStyles: 'change styles',
    file: 'File',
    create: 'Create',
    pageFromModel: 'Page created from Model',
    quickLink: 'Quick link to',
    ttQuickLink: 'Shortcut to your other pages',
    saveModelInstance: 'SAVE MODEL INSTANCE',
    savePage: 'SAVE PAGE',
    duplicate: 'duplicate',
    ttDuplicate: 'Duplicate this page',
    editLayout: 'EDIT LAYOUT',
    ttEditLayout: 'Switch to edit layout',
    ttUndoRedo: 'Undo/Redo your changes',
    ttSavePage: 'Save your changes to this page',
    typeUrlOrRgb: 'TYPE URL OR RGB',
    noParent: 'no parent',
    phTitle: 'ENTER TITLE HERE',
    phBorderSize: 'size in px',
    phFontSize: 'size in px, em, rem, pt, %',
    descActiveComponent: 'if no value is set, global settings defined in customizer are applied.',
    ttTitle: 'Give this page a title so you can easily identify it',
    ttLayout: 'Choose one of your layouts as a template for this page',
    ttParent: 'Choose one of your other pages as  the parent for this page',
    ttLink: 'Open in Firefox with FireHbbTV activated',
    titleDownloadFireHbbTV: 'Download the firefox add-on for previewing HbbTV pages',
    titleDownloadFirefox: 'Download Firefox to use the add-on to visualize HbbTV pages',
    ttToggleUpdate: 'Schedule this update rather than going live immediately',
    ttPageStyles: 'Edit the page and component CSS styles (colours, fonts, borders)',
    ttCreateModelFromPage: 'Create a model based on this page',
    ttEditIcon: 'Edit this component',
    ttToggleDefault: 'Toggle this as the default selected component on page',
    ttBackToPageEditor: '[tooltip: go back to page editor]',
    ttToggleState: '[tooltip: toggle state management]'
  },
  componentEditor: {
    editComponentStyle: 'Edit Component Styles',
    editInner: 'Edit...',
    titleComponentStyle: 'Component Style',
    componentLabel: 'Component Label',
    componentType: 'Component Type',
    chooseView: 'Choose view',
    hideFocus: 'Hide Focus',
    navigable: 'Navigable',
    scrollable: 'Scrollable',
    hotSpot: 'Hot Spot',
    companionScreen: 'Companion Screen',
    thisIsAModel: 'This is a model',
    editProtected: 'Editing is disabled',
    editStubborn: 'Edit anyway',
    ttLabel: 'Add a label to identify this component',
    ttType: 'Change the component type',
    ttView: '[tooltip choose view]',
    ttFocus: 'Show/Hide whether this component has focus',
    ttHotSpot: 'Is this component a \'Hot Spot\'',
    ttNavigable: 'Can the user navigate to this component',
    ttScrollable: '[tooltip component scrollable]',
    ttCompScr: 'Is this component shown on a companion screen',
    ttEditStyle: 'Edit how this component looks (borders, colours, fonts, margin, padding...)',
    ttTargetComponent: '[tooltip component target]'
  },
  chrome: {
    ttchromeFields: '[tooltip chrome fields]',
    ttSaturation: '[tooltip saturation - pick the saturation of chosen color]',
    ttHue: '[tooltip hue]',
    ttAlpha: '[tooltip alpha]'
  },
  audio: {
    title: 'Audio settings',
    audioUrlInput: 'Source File',
    audioUrlLabel: 'Source File',
    autoStart: 'Auto Start',
    chooseFile: 'Choose file',
    whenPageLoads: 'When the page loads',
    repeat: 'Repeat',
    loop: 'Loop',
    ttAudioUrl: 'Load audio from URL',
    ttChooseFile: 'Select audio from disc or library',
    ttAutostart: 'Play audio on page load when the page loads',
    ttRepeat: 'Loop/Repeat audio'
  },
  broadcast: {
    notice1: 'The broadcast component displays the broadcast signal on the TV.',
    notice2: 'If you are testing this component on your desktop using',
    notice3: 'or similar, the component will be shown as a black box.'
  },
  clone: {
    choose: 'Choose',
    modelComponentPage: 'Model Component Page',
    layoutBox: 'Layout Box',
    component: 'Component',
    ttSelectModel: 'Select the model/page that contains the component you want to clone',
    ttSelectComponent: 'Select the component to clone',
    ttSourceLayout: '[tooltip source Layout]'
  },
  image: {
    title: 'Image Settings',
    url: 'Image URL',
    ttUrl: 'Use a URL to fetch the image for this component',
    upload: 'Upload Image',
    ttUploadImg: 'Upload an image for this component',
    chooseFromLibrary: 'or choose from library',
    ttChooseImg: 'Select an image from the library for this component',
    choose: 'Choose',
  },
  launcher: {
    backend: {
      launcherSettings: 'Launcher settings',
      toLinkAPage: 'To link to a specific page of this component, append the following to your link',
      menuOrient: 'Menu Orientation',
      horizontal: 'Horizontal',
      vertical: 'Vertical',
      format: 'Launcher Format',
      landscape: 'Landscape',
      square: 'Square',
      squareWithInfo: 'Square with Info',
      portrait: 'Portrait',
      launcherStyle: 'Launcher style',
      optionStandard: 'Standard',
      optionArte: 'Arte',
      scrollStyle: 'Scroll style',
      optionCarousel: 'Carousel',
      optionPagination: 'Pagination',
      showPaginationInfo: 'Show Pagination Info',
      addLauncherElement: 'Add Launcher element',
      launcherThumbnail: 'Launcher Thumbnail',
      launcherThumbnailUrl: 'Launcher Thumbnail URL',
      chooseThumbnail: 'Choose Thumbnail',
      title: 'Title',
      launcherTitle: 'Launcher Title',
      role: 'Role',
      link: 'Link',
      controlTargetComponent: 'Control Target component',
      chooseTargetFirst: 'Choose target first!',
      launcherTargetUrl: 'Launcher Target URL',
      pages: 'Pages',
      state: 'State',
      description: 'Description',
      launcherDescription: 'Launcher Description',
      deleteLauncherElement: 'Delete Launcher Element',
      optionalContentIcon: 'Optional content icon',
      none: 'none',
      audio: 'audio',
      picture: 'picture',
      text: 'text',
      video: 'video',
      ttMenuOrientation: '[tooltip menu orientation]',
      ttElementFormat: '[tooltip elementFormat]',
      ttLauncherStyle: '[tooltip LauncherStyle]',
      ttScrollStyle: '[tooltip ScrollStyle]',
      ttShowPaginationInfo: '[tooltip ShowPaginationInfo]',
      ttColumnsRows: '[tooltip Columns and Rows]',
      ttAddLauncherElement: '[tooltip addLauncherElement]',
      ttThumbnailUrl: '[tooltip Launcher Thumbnail URL]',
      ttThumbnailChoose: '[tooltip LChoose Launcher Thumbnail]',
      ttTitle: '[tooltip title]',
      ttRole: '[tooltip ttRole]',
      ttUrl: '[tooltip Target Url]',
      ttPages: '[tooltip PageSelector]',
      ttComponent: '[tooltip ComponentStateSelector]',
      ttDescription: '[tooltip Description]',
      ttDeleteElement: '[tooltip deleteLauncherElement]',
      ttOptionalContentIcon: '[tooltip optionalContentIcon]'
    },
    frontend: {
      monthNames: [
        'JANUARY', 'FEBRUARY',
        'MARCH', 'APRIL',
        'MAY', 'JUNE',
        'JULY', 'AUGUST',
        'SEPTEMBER', 'OCTOBER',
        'NOVEMBER', 'DECEMBER'
      ],
      dayNames: [
        'SUNDAY',
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY']
    }
  },
  link: {
    linkSettings: 'Link Settings',
    linkImageUrl: 'Link Image URL',
    placeHolderLinkImageUrl: 'LINK IMAGE URL',
    ttLinkImageUrl: '[tooltip LINK IMAGE URL]',
    chooseLinkImage: 'Choose Link Image',
    ttChooseLinkImage: '[tooltip Choose Link Image]',
    linkLabel: 'Link Label',
    placeHolderLinkLabel: 'LINK LABEL',
    ttLinkLabel: '[tooltip LINK LABEL]',
    or: 'OR',
    linkTarget: 'Link Target',
    ttLinkTarget: '[tooltip Link Target]',
    placeHolderLinkUrl: 'LINK URL',
    pages: 'Pages',
    ttPages: '[tooltip Pages]',
    imageLayoutCover: 'Image Layout Cover',
    ttImageLayoutCover: '[tooltip Image Layout Cover]'
  },
  list: {
    listSettings: 'List Settings',
    addListElement: 'Add List Element',
    ttAddListElement: '[tooltip Add List Element]',
    title: 'Title',
    ttTitle: '[tooltip Element Title]',
    placeHolderTitle: 'ELEMENT TITLE',
    url: 'URL',
    ttUrl: '[tooltip URL]',
    placeHolderUrl: 'ELEMENT TARGET URL',
    description: 'Description',
    ttDesc: '[tooltip ELEMENT DESCRIPTION]',
    placeHolderDesc: 'ELEMENT DESCRIPTION',
    deleteListElement: 'Delete List Element',
    ttDeleteListElement: '[tooltip Delete List Element]'
  },
  menu: {
    menuSettings: 'Menu Settings',
    addMenuItem: 'Add Menu item',
    ttAddMenuItem: '[tooltip Add Menu item]',
    title: 'Title',
    ttTitle: '[tooltip title]',
    sideMenu: 'Side Menu',
    showAsSideMenu: 'Show menu as side menu',
    ttSideMenu: 'Show menu as side menu',
    menuOrient: 'Menu Orientation',
    ttMenuOrient: 'Menu Orientation',
    horizontal: 'Horizontal',
    vertical: 'Vertical',
    loop: 'Loop',
    restart: 'whether the navigation should restart from first item after the last one ( and viceversa ) or not',
    ttLoop: 'Whether the navigation should restart from first item after the last one ( and viceversa ) or not.',
    showButtons: 'Show Buttons',
    ttShowButtons: 'Show Buttons',
    showRemoteKeys: 'Show Remote Keys',
    ttShowRemoteKeys: 'Show Remote Keys',
    selectAction: 'Select Action',
    goToPrevPage: 'Go to previous page',
    toggleApplication: 'Toggle application(show/hide)',
    label: 'Label',
    ttLabel: '[tooltip label]',
    placeHolderLabel: 'MENU TEXT',
    remoteKey: 'Remote Key',
    remoteControlKey: 'Remote control key',
    ttRemoteControlKey: 'Remote control key',
    role: 'Role',
    ttRole: '[tooltip role]',
    link: 'Link',
    controlApplication: 'Control Application',
    controlTargetComponent: 'Control target component',
    launchAppViaAIT: 'Launch application via AIT',
    url: 'URL',
    placeHolderUrl: 'TARGET URL',
    ttUrl: 'Target url',
    pages: 'Pages',
    ttPages: 'Pages',
    appId: 'App ID',
    ttAppId: 'App ID',
    fallbackUrl: 'Fallback URL',
    ttFallbackUrl: 'Fallback URL',
    appAction: 'Application Action',
    ttAppAction: 'Application Action',
    state: 'State',
    ttState: '[tooltip State]',
    addItem: 'Add menu item',
    ttAddItem: 'Add menu item',
    deleteItem: 'Delete menu item',
    ttDeleteItem: 'Delete menu item'
  },
  redbutton: {
    redButtonSettings: 'Red Button Settings',
    buttonImage: 'Button Image',
    placeHolderImageUrl: 'IMAGE URL',
    ttImageUrl: '[tooltip IMAGE URL]',
    chooseImage: 'Choose Image',
    ttChooseImage: '[tooltip Choose Image]',
    redButtonLink: 'Red Button Link',
    placeHolderRedButtonLink: 'LINK URL',
    ttRedButtonLink: '[tooltip redbutton LINK URL]',
    fadeInTime: 'Fade-in Time (s)',
    ttFadeInTime: '[tooltip Fade-in Time in seconds]',
    placeHolderFadeInTime: 'SECONDS',
    displayDuration: 'Display Duration (s)',
    ttDisplayDuration: '[tooltip Display Duration in seconds]',
    placeHolderDisplayDuration: 'SECONDS'
  },
  scribbleLive: {
    noPreviewAvailable: 'ScribleLive Feed. No specific preview available.',
    title: 'Scribble Live',
    hint1: 'Hint: please use',
    hint2: 'for language settings. (to display timerelated Information like',
    hint3: 'a year ago',
    ttFeedTitle: '[tooltip FeedTitle]',
    ttFeedId: '[tooltip FeedId]',
    ttFeedToken: '[tooltip FeedToken]',
    ttPolling: '[tooltip Polling]',
    ttFeedSize: '[tooltip FeedSize]'
  },
  scrolledText: {
    title: 'Scrolled Text Settings',
    arrowColor: 'Arrow Color',
    activeArrowColor: 'Active Arrow Color',
    arrowPlacement: 'Arrow Placement',
    onText: 'on text',
    left: 'left',
    right: 'right',
    aboveBelow: 'above/below',
    outside: 'outside',
    noArrows: 'no arrows',
    ttArrowColor: '[tooltip arrow color]',
    ttActiveArrowColor: '[tooltip active arrow color]',
    ttArrowPosition: '[tooltip arrow position]',
  },
  toggleTracking: {
    title: 'Toggle Tracking Settings',
    enabledText: 'Enabled Text',
    ttEnabledText: '[tooltip Enabled Text]',
    disabledText: 'Disabled Text',
    ttDisabledText: '[tooltip Disabled Text]',
    button: 'Button',
    ttButton: '[tooltip Button]'
  },
  video: {
    title: 'Video Settings',
    asset: 'Asset',
    src: 'Video Source',
    placeHolderSrc: 'VIDEO URL',
    or: 'OR',
    chooseVideo: 'Choose Video',
    thumbnail: 'Video Thumbnail',
    placeHolderThumbnail: 'THUMBNAIL URL',
    chooseThumbnail: 'Choose Thumbnail',
    autoPlay: 'Autoplay',
    startPlaybackWhenPage: 'Start playback when page opens',
    repeat: 'Repeat',
    loop: 'Loop video',
    fullscreenStart: 'Fullscreen start',
    startVideoFullScr: 'Start video in fullscreen',
    removeBlackBars: 'Remove Black Bars',
    zoomVideo: 'Zoom video to remove black bars',
    playIcon: 'Play icon',
    showPlayIcon: 'show play icon when video is ready',
    showNavBar: 'Show navigation bar'
  },
  timeline: {
    wizard: {
      title: 'TimeLine Wizard',
      welcome: 'Welcome to the timeline wizard. There are a few questions you need to answer to choose your version of timeline editor.',
      question: {
        videoType: 'Do you want to use the broadcast video or an on-demand video ?',
        eventType: 'Then which types of events do you intend to use ?',
        duration: 'Then what is the duration of the show (in seconds, only important for video on demand) ?'
      },
      tooltip: {
        streamEvent: 'for use with broadcast..',
        mediaEvent: 'only useful when a video-on-demand is present...',
        keyEvent: 'can be useful to remove elements added by stream or media events',
        timeEvent: 'useful for splash screens and periodic logos',
        clockEvent: 'useful for elements that need to appear at a certain clock based time'
      },
      timelineUI: {
        label: 'Your TimeLine UI is',
        option: {
          vod: 'On-demand Video UI',
          bc: 'Broadcast UI',
          bcp: 'Broadcast UI + Time',
          cui: 'Complete UI'
        },
        timelineURL: 'The URL of the Timeline application will be',
        next: 'Next',
        errorSaving: 'error saving option '
      }
    },
    title: 'Timeline',
    range: 'Range',
    duration: 'Duration (sec)',
    fps: 'Frames per second',
    select_range: 'Please select a range',
    editting_range: 'Editting range {0}',
    no_selection: 'No time range currently selected',
    new_project: 'New project {0}',
    existing_project: 'Project from "{0}" blog restorable',
    restore: {
      button: { value: 'Restore' },
      wait: 'Wait {0} seconds.',
      skipload: ' (restored {0} {1} secondes ago)',
      scenario_loaded: 'Scenario restore',
      nothing_to_restore: 'Nothing to restore',
      restored: 'Restored {0} events',
      no_overwrite: 'Keeping current workspace',
      ask_to_overwrite: 'Overwrite current workspace?'
    },
    publish: {
      button: {
        value: 'Save'
      },
      publishing: 'Saving...',
      no_ovewrite: 'Skipping publish to avoid data loss',
      warning_overwrite: 'WARNING!:\nThis will overwrite your current scenario from \'{0}\'\n\nContinue with saving?',
      wait: 'Wait {0} seconds.',
      saved: ' (saved {0}s ago at {1})',
      notsaving: 'Not saving, scenario is empty',
      scenario_published: '{0} scenario with {1} events published at {2}'
    },
    remove: {
      button: {
        value: 'Reset'
      },
      deleting: 'Deleting...',
      no_ovewrite: 'Skipping Delete to avoid data loss',
      warning_overwrite: 'WARNING!:\nThis will overwrite your current scenario from \'{0}\'\n\nContinue wi' +
      'th deleting?',
      wait: 'Wait {0} seconds.',
      saved: ' (saved {0}s ago at {1})',
      notsaving: 'Not saving, scenario is empty',
      scenario_deleted: '{0} scenario with {1} events deleted at {2}'
    },
    rangeEdit: {
      button: {
        value: 'Activate Editing',
        title: 'Refresh and/or activate editting the selected time range'
      },
      button2: {
        value: 'Swap Selected',
        title: 'Swap selected range with next to the right'
      },
      event: {
        type: 'Type',
        keycode: 'KeyCode',
        data: 'Data',
        begin: 'Begin',
        dura: 'Duration'
      },
      eventOptions: {
        streamEvent: 'StreamEvent',
        keyEvent: 'KeyEvent',
        mediaEvent: 'MediaEvent',
        timeEvent: 'TimeEvent',
        clockEvent: 'ClockEvent'
      },
      time: 'Time',
      page: 'Page'
    },
    rangeRemove: {
      button: {
        value: 'Remove Selected',
        title: 'Removed selected range'
      }
    },
    rangeTool: {
      range: 'Event Editing',
      swapButton: {
        value: 'Swap Selected',
        title: 'Swap selected range with next to the right'
      }
    },
    restoreButton: {
      error: 'Error loading scenario'
    },
    timelineEditor: {
      error: { unableToSet: 'Warning: unable to set value' },
      unsavedChanges: 'You have unsaved changes'
    },
    dsmcc: {
      title: 'Streamevent Container',
      button: {
        download: {
          link: 'Download',
          title: 'Retrieve a DSMCC formatted XML for stream events'
        },
        save: {
          link: 'Save',
          title: 'Save the DSMCC settings'
        }
      },
      fileName: 'dsmcc.xml',
      seID: {
        label: 'StreamEvent ID',
        title: 'StreamEvent ID (1-65535)'
      },
      seName: {
        label: 'StreamEvent Name',
        title: 'StreamEvent Name (TXT)'
      },
      seComponentTag: {
        label: 'Component Tag',
        title: 'Component Tag (1-255)'
      },
      labelUrl: 'URL',
      error: {
        onLoad: 'Error getting DSMCC option, modify values and try again',
        onSave: 'Error saving DSMCC option'
      },
      saved: 'DSMCC info saved'
    },
    elementMenu: {
      noFreeSpace: 'no free space',
      enterKeyCode: 'Enter keycode',
      addToTheTimeline: 'Add to the timeline',
      back: 'Back',
      addAPage: 'Add a page',
      inTheBack: 'In the back',
      backPage: 'Back page',
      remove: 'Remove',
      addEventLinkToPage: 'Add an event linking to a page',
      abbr: {
        streamEvent: 'StreamEv',
        keyEvent: 'KeyEv',
        mediaEvent: 'MediaEv',
        timeEvent: 'TimeEv',
        clockEvent: 'ClockEv'
      },
      targetPage: 'Target Page',
      addElement: 'Add element'
    }
  },
  frontend: {
    error: {
      title: 'Error',
      formatNotSupported: 'A/V FORMAT NOT SUPPORTED',
      connection: 'Cannot connect to server or connection lost',
      unidentified: 'Unidentified error', // by DAE 1.1 p. 263:
      resource: 'Insufficient resources',
      corrupt: 'Content corrupt or invalid',
      available: 'Content not available',
      positition: 'Content not available at a givin position',
      blocked: 'Content not available due to parental control' // (by ETSI 1.2.1)
    },
    state: {
      stopped: 'STOPPED',
      playing: 'PLAYING',
      paused: 'PAUSED',
      connected: 'CONNECTING',
      buffering: 'BUFFERING',
      finished: 'FINISHED'
    },
    video360: {
      deviceNotSupported: 'Your device isn\'t supported.',
      errSyncPlayPos: 'Sync of current playPosition already reported. It seems that the player is not playing',
      errInvJson: 'get invalid json from server',
      errConfig: 'invalid config object. at least config.gatewayUrl must be set.'
    }
  }
};
module.exports = en;