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
 * Jean-Philippe Ruijs (github.com/jeanphilipperuijs)
 *
 **/
/**
 * original suomi l10n file
 */
const fi = {
  appMgr: {
    exclude: 'Exclude',
    navModels: {
      slideflow: 'SlideFlow-navigoinnin avulla sisällön luoja voi suunnitella koko näytön sovellussivuja ja määrittää järjestyksen, jossa ne esitetään. Käyttäjäkokemus on samanlainen kuin PowerPoint-diaesityksen kautta. <br /> Vaikka sivuilla voi olla valittuja hotspotteja, jotka tarjoavat lisää sisältöä ja tietoa tällä hetkellä esiteltyyn sivuun, navigointi yksittäisten sivujen välillä on peräkkäistä, jolloin sisällön luoja voi rakentaa Aikaisemmilla sivuilla esitetyillä tiedoilla ja perustaa kerronnallinen virtaus.',
      timeline: 'Tapahtumaan perustuva navigointi mahdollistaa HbbTV-sisällön esityksen lähetysohjelman ohjaamana. Yleisin esimerkki on punainen painikkeen esittely TV-ohjelman tai mainoksen alussa, jotta hälytyksen katsotaan olevan saatavilla lisätietoja. Vaikka painikkeen ulkoasua laukaisevat yleensä MPEG-tapahtumien tapahtumat, vaihtoehtoiset kanavat. esim. Nettipistokkeita tai sovelluspyyntöjä. <br/> Tapahtumiseen perustuva navigointi soveltuu parhaiten pieniin tietosisällöihin.',
      website: 'Tätä mallia käytetään yleisimmin HbbTV-sovelluksissa. Aloitussivulta käyttäjät voivat käyttää lisää sisältöä valitsemalla näytön painikkeet nuolinäppäimillä - samanlainen kuin verkkosivusto. Usein pikavalintoja / numeerisia painikkeita voidaan käyttää. <br/> Vaikka tämä malli on yleinen, se ei sovi hyvin digitaaliseen tarinankerrontamiseen, koska käyttäjien polku on mielivaltainen, minkä vuoksi jokaisen sivun on pystyttävä seisomaan itsenäisesti.'
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
    chooseAnAction: 'Choose an action'
  },
  pageSelector: {
    loading: 'LOADING',
    select: 'SELECT',
    noTitle: 'no title',
    error: 'ERROR'
  },
  styles: {
    choose: 'Choose',
    typeUrlOrSelectMedia: 'type url or select media'
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
    free: 'Free'
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
    layoutUsedInPages: 'LAYOUT USED IN PAGES'
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
    closeCropEditor: 'Close crop editor'
  },
  stateEditor: {
    title: 'Component Editor',
    stateManagement: 'State Management',
    saveAsTemplate: 'Save As Template'
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
    saveModelInstance: 'SAVE MODEL INSTANCE',
    savePage: 'SAVE PAGE',
    duplicate: 'duplicate',
    editLayout: 'EDIT LAYOUT',
    typeUrlOrRgb: 'TYPE URL OR RGB',
    noParent: 'no parent'
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
    editStubborn: 'Edit anyway'
  },
  audio: {
    backend: {
      title: 'Audio settings',
      audioUrlInput: 'Source File',
      audioUrlLabel: 'Source File',
      autoStart: 'Auto Start',
      chooseFile: 'Choose file',
      whenPageLoads: 'When the page loads',
      repeat: 'Repeat',
      loop: 'Loop'
    }
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
    component: 'Component'
  },
  image: {
    title: 'Image Settings',
    url: 'Image URL',
    upload: ' Upload Image',
    chooseFromLibrary: 'or choose from library',
    choose: 'Choose'
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
      video: 'video'
    },
    frontend: {
      monthNames: [
        'TAMMIKUU', 'HELMIKUU',
        'MAALISKUU', 'HUHTIKUU',
        'TOUKOKUU', 'KESÄKUU',
        'HEINÄKUU', 'ELOKUU',
        'SYYSKUU', 'LOKAKUU',
        'MARRASKUU', 'JOULUKUU'
      ],
      dayNames: [
        'SUNNUNTAI',
        'MAANANTAI',
        'TIISTAI',
        'KESKIVIIKKO',
        'TORSTAI',
        'PERJANTAI',
        'LAUANTAIN']
    }
  },
  link: {
    linkSettings: 'Link Settings',
    linkImageUrl: 'Link Image URL',
    placeHolderLinkImageUrl: 'LINK IMAGE URL',
    chooseLinkImage: 'Choose Link Image',
    linkLabel: 'Link Label',
    placeHolderLinkLabel: 'LINK LABEL',
    or: 'OR',
    linkTarget: 'Link Target',
    placeHolderLinkUrl: 'LINK URL',
    pages: 'Pages',
    imageLayoutCover: 'Image Layout Cover'
  },
  list: {
    listSettings: 'List Settings',
    addListElement: 'Add List Element',
    title: 'Title',
    placeHolderTitle: 'ELEMENT TITLE',
    url: 'URL',
    placeHolderUrl: 'ELEMENT TARGET URL',
    description: 'Description',
    placeHolderDesc: 'ELEMENT DESCRIPTION',
    deleteListElement: 'Delete List Element'
  },
  menu: {
    menuSettings: 'Menu Settings',
    addMenuItem: 'Add Menu item',
    title: 'Title',
    sideMenu: 'Side Menu',
    showAsSideMenu: 'Show menu as side menu',
    menuOrient: 'Menu Orientation',
    horizontal: 'Horizontal',
    vertical: 'Vertical',
    loop: 'Loop',
    restart: 'whether the navigation should restart from first item after the last one ( and viceversa ) or not',
    showButtons: 'Show Buttons',
    showRemoteKeys: 'Show Remote Keys',
    selectAction: 'Select Action',
    goToPrevPage: 'Go to previous page',
    toggleApplication: 'Toggle application(show/hide)',
    label: 'Label',
    placeHolderLabel: 'MENU TEXT',
    remoteKey: 'Remote Key',
    remoteControlKey: 'Remote control key',
    role: 'Role',
    link: 'Link',
    controlApplication: 'Control Application',
    controlTargetComponent: 'Control target component',
    launchAppViaAIT: 'Launch application via AIT',
    url: 'URL',
    placeHolderUrl: 'TARGET URL',
    pages: 'Pages',
    appId: 'App ID',
    fallbackUrl: 'Fallback URL',
    appAction: 'Application Action',
    state: 'State',
    deleteItem: 'Delete menu item',
    addItem: 'Add menu item'
  },
  redbutton: {
    redButtonSettings: 'Red Button Settings',
    buttonImage: 'Button Image',
    placeHolderImageUrl: 'IMAGE URL',
    chooseImage: 'Choose Image',
    redButtonLink: 'Red Button Link',
    placeHolderRedButtonLink: 'LINK URL',
    fadeInTime: 'Fade-in Time (s)',
    placeHolderFadeInTime: 'SECONDS',
    displayDuration: 'Display Duration (s)',
    placeHolderDisplayDuration: 'SECONDS'
  },
  scribbleLive: {
    noPreviewAvailable: 'ScribleLive Feed. No specific preview available.',
    title: 'Scribble Live',
    hint1: 'Hint: please use',
    hint2: 'for language settings. (to display timerelated Information like',
    hint3: 'a year ago'
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
    noArrows: 'no arrows'
  },
  toggleTracking: {
    title: 'Toggle Tracking Settings',
    enabledText: 'Enabled Text',
    disabledText: 'Disabled Text',
    button: 'Button'
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
    title: 'Timeline',
    range: 'Range',
    duration: 'Duration (sec)',
    fps: 'Frames per second',
    select_range: 'Please select a range',
    editting_range: 'Editting range {0}',
    no_selection: 'No time range currently selected',
    new_project: 'New project {0}',
    existing_project: `Project from '{0}' blog restorable`,
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
        value: 'Delete Scenario'
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
      error: { unableToSet: 'Warning: unable to set value' }
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
    },
    bbBox: {
      title: 'BeeBee Box',
      button: {
        link: 'Generate',
        title: 'Retrieve a BeeBee Box formatted XML for stream events'
      },
      fileName: 'beebeebox_streamevents.xml',
      no_streamevents: 'no event to stream',
      generated_streamevents: `The file '{0}' has been generated.`,
      no_project: 'No project loaded to convert to BeeBee Box file'
    }
  },
  frontend: {
    error: {
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
      error: 'Virhe',
      deviceNotSupported: 'Laitetta ei tueta.'
    }
  }
};
module.exports = fi;
