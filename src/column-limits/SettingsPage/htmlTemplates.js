import style from './styles.css';
import { generateColorByFirstChars as generateColor } from '../shared/utils';

export const groupSettingsBtnTemplate = ({ groupOfBtnsId = '', openEditorBtn = '' }) =>
  `<div id="${groupOfBtnsId}" class="aui-buttons ${style.jhGroupOfBtns}"><button id="${openEditorBtn}" class="aui-button">Group Settings</button></div>`;

export const formTemplate = ({ leftBlock = '', rightBlock = '', id = 'jh-wip-limits-id' }) =>
  `<form class="aui ${style.form}" id="${id}">
    <div class="${style.formLeftBlock}">${leftBlock}</div>
    <div class="${style.formRightBlock}">${rightBlock}</div>
    </form>`;

export const groupsTemplate = ({ id = 'jh-groups-template', children = '' }) => `<div id="${id}">${children}</div>`;

export const groupTemplate = ({
  dropzoneClass = '',
  groupLimitsClass = '',
  withoutGroupId = '',
  groupId = '',
  customGroupColor,
  groupMax = '',
  columnsHtml = '',
}) => `
        <div
          class="${style.columnGroupJH} "
          style="${groupId !== withoutGroupId ? `background-color: ${customGroupColor || generateColor(groupId)}` : ''}"
        >
            ${
              groupId === withoutGroupId
                ? ''
                : `<section class="${style.columnGroupLimitsJH}">
                  <span>Limit for group:</span>
                  <input data-group-id="${groupId}" class="${groupLimitsClass}" value="${groupMax}"/>
                </section>`
            }
          <div class="${style.columnListJH} ${dropzoneClass}" data-group-id="${groupId}">${columnsHtml}</div>
      </div>
    `;

export const columnTemplate = ({ columnId = '', dataGroupId = '', columnTitle = '', draggableClass }) =>
  `<div data-column-id="${columnId}" data-group-id="${dataGroupId}" class="${style.columnDraggableJH} ${draggableClass}" draggable="true">${columnTitle}</div>`;

export const dragOverHereTemplate = ({ dropzoneId = '', dropzoneClass = '' }) =>
  `<div  class="${style.addGroupDropzoneJH} ${dropzoneClass}" id="${dropzoneId}">Drag column over here to create group</div>`;

export const colorPickerTooltipTemplate = ({
  tooltipClass,
  id,
  colorPickerId,
  colorPickerResultId,
  okBtnId,
  closeBtnId,
  btnWrpClass,
  colorPickerResultClass,
}) => `
  <div id="${id}" class="${tooltipClass}">
    <div class="${btnWrpClass}">
      <div class="${colorPickerResultClass}" id="${colorPickerResultId}"></div>
      <div>
        <button id="${okBtnId}" class="aui-button aui-button-primary" type="button">Ok</button>
        <button id="${closeBtnId}" class="aui-button" type="button">Close</button>
      </div>
    </div>
    <div id="${colorPickerId}"></div>
  </div>`;
