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
 * Miggi Zwicklbauer (miggi.zwicklbauer@fokus.fraunhofer.de)
 * Thomas Tröllmich  (thomas.troellmich@fokus.fraunhofer.de)
 * Jean-Philippe Ruijs (github.com/jeanphilipperuijs)
 * Jean-Claude Dufourd (jean-claude.dufourd@telecom-paristech.fr
 * Stefano Miccoli (stefano.miccoli@finconsgroup.com)
 * Marco Ferrari (marco.ferrari@finconsgroup.com)
 **/
import React from 'react';
import { componentLoader } from '../../../ComponentLoader';
import { openMediaGallery } from '../../utils';
import autobind from 'class-autobind';
import { noSubmitOnEnter } from '../../utils';


function editView(params) {
  const { id, data, changeAreaContent, context, stateId } = params;
  return (
    <VideoEdit id={id} {...data} changeAreaContent={changeAreaContent} />
  );
}

function preview(content = {}) {
  const thumbnail = (content.data) ? (content.data.thumbnail) : '';
  return (
    <div className="mpat-content-preview videocontent-preview">
      <div className="mpat-image-preview" style={{ backgroundImage: `url(${thumbnail})` }} />
    </div>
  );
}


class VideoEdit extends React.PureComponent {

  static defaultProps = {
    url: '',
    autostart: false,
    loop: false,
    fullscreen: false,
    zoom: false,
    playIcon: true,
    showNavBar: true,
    thumbnail: ''
  };

  constructor() {
    super();
    autobind(this);
  }

  setContent(key, value) {
    if (key === "url" || key === "thumbnail") {
      this.props.changeAreaContent({
        [key]: value,
        'asset': '',
      });
    } else {
      this.props.changeAreaContent({ [key]: value });
    }
  }

  setAsset(value, item) {
    if (item === null) {
      this.props.changeAreaContent({ 'asset': value });
    } else {
      this.props.changeAreaContent({
        'asset': item.meta["_tva_title"],
        'url': item.meta["_tva_hbbtv_reference_video_url"][0],
        'thumbnail': item.meta["_tva_preview_image"][0]
      });
    }
  }
  render() {
    const { url, autostart, loop, fullscreen, zoom, playIcon, showNavBar, thumbnail } = this.props;
    return (
      <div className="component editHeader">
        <h2>Ad Inserted Video Settings</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Ad Inserted Video Source: </label>
              </td>
              <td>
                <select onChange={e => this.setContent('url', e.target.value)}>
                  <option key='1' value='AdInsertedVideo1'>Ad Inserted Video 1</option>
                  <option key='2' value='AdInsertedVideo2'>Ad Inserted Video 2</option>
                  <option key='3' value='AdInsertedVideo3'>Ad Inserted Video 3</option>
                  <option key='4' value='AdInsertedVideo4'>Ad Inserted Video 4</option>
                  <option key='5' value='AdInsertedVideo5'>Ad Inserted Video 5</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label>Thumbnail: </label>
              </td>
              <td>
                <input
                  type="text"
                  id="videoThumbnailInput"
                  placeholder="THUMBNAIL URL"
                  value={thumbnail}
                  onKeyPress={noSubmitOnEnter}
                  onChange={e => this.setContent('thumbnail', e.target.value)}
                />
                <span className="padded_or">OR</span>
                <button type="button" target="videoThumbnailInput"
                  className="button mpat-insert-media white_blue" data-type="image">
                  choose Thumbnail
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <label>Autoplay: </label>
              </td>
              <td>
                <input type="checkbox" checked={autostart}
                  onChange={e => this.setContent('autostart', e.target.checked)} />
                &nbsp;(Start playback when page opens)
            </td>
            </tr>
            <tr>
              <td>
                <label>Repeat: </label>
              </td>
              <td>
                <input type="checkbox" checked={loop}
                  onChange={e => this.setContent('loop', e.target.checked)} />
                &nbsp;(Loop)
            </td>
            </tr>
            <tr>
              <td>
                <label>Fullscreen start: </label>
              </td>
              <td>
                <input type="checkbox" checked={fullscreen}
                  onChange={e => this.setContent('fullscreen', e.target.checked)} />
                &nbsp;(Start video in fullscreen)
            </td>
            </tr>
            <tr>
              <td>
                <label>Remove Black Bars: </label>
              </td>
              <td>
                <input type="checkbox" checked={zoom}
                  onChange={e => this.setContent('zoom', e.target.checked)} />
                &nbsp;(Zoom video to remove black bars)
            </td>
            </tr>
            <tr>
              <td>
                <label>Play icon</label>
              </td>
              <td>
                <input type="checkbox" checked={playIcon}
                  onChange={e => this.setContent('playIcon', e.target.checked)} />
                &nbsp;(show play icon when video is ready)
            </td>
            </tr>
            <tr>
              <td>
                <label>Show navigation bar: </label>
              </td>
              <td>
                <input type="checkbox" checked={showNavBar}
                  onChange={e => this.setContent('showNavBar', e.target.checked)} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


componentLoader.registerComponent(
  'videoadinsertion', {
    edit: editView,
    preview
  }, {
    isHotSpottable: true,
    isScrollable: false,
    hasNavigableGUI: true,
    isStylable: false
  }, {
    navigable: true
  }
);
