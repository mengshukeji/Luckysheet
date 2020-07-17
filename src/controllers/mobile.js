import { rowLocation, colLocation, mouseposition } from '../global/location';
import { selectHightlightShow } from './select';
import menuButton from './menuButton';
import luckysheetFreezen from './freezen';
import Store from '../store';

//设备是移动端
export default function mobileinit(){
    //去除滚动条
    Store.cellMainSrollBarSize = 0;

    //滑动滚动表格
    let luckysheet_touchmove_status = false,
        luckysheet_touchmove_startPos = {},
        luckysheet_touchhandle_status = false;
    $(document).on("touchstart", "#luckysheet-grid-window-1", function(event){
        luckysheet_touchmove_status = true;

        let touch = event.originalEvent.targetTouches[0];
        luckysheet_touchmove_startPos = {
            x: touch.pageX,
            y: touch.pageY
        }
    })
    $(document).on("touchmove", "#luckysheet-grid-window-1", function(event){
        if(event.originalEvent.targetTouches.length > 1 || (event.scale && event.scale !== 1)){
            return;
        }

        let touch = event.originalEvent.targetTouches[0];

        if(luckysheet_touchmove_status){//滚动
            let slideX = touch.pageX - luckysheet_touchmove_startPos.x;
            let slideY = touch.pageY - luckysheet_touchmove_startPos.y;

            luckysheet_touchmove_startPos = {
                x: touch.pageX,
                y: touch.pageY
            }

            let scrollLeft = $("#luckysheet-cell-main").scrollLeft();
            let scrollTop = $("#luckysheet-cell-main").scrollTop();

            scrollLeft -= slideX;
            scrollTop -= slideY;

            if(scrollLeft < 0){
                scrollLeft = 0;
            }

            if(scrollTop < 0){
                scrollTop = 0;
            }

            if(Math.abs(slideX) < Math.abs(slideY)){
                $("#luckysheet-scrollbar-y").scrollTop(scrollTop);
            }
            else{
                $("#luckysheet-scrollbar-x").scrollLeft(scrollLeft);
            }
        }
        else if(luckysheet_touchhandle_status){//选区
            let mouse = mouseposition(touch.pageX, touch.pageY);
            let x = mouse[0] + $("#luckysheet-cell-main").scrollLeft();
            let y = mouse[1] + $("#luckysheet-cell-main").scrollTop();

            let row_location = rowLocation(y), 
                row = row_location[1], 
                row_pre = row_location[0], 
                row_index = row_location[2];
            let col_location = colLocation(x), 
                col = col_location[1], 
                col_pre = col_location[0], 
                col_index = col_location[2];

            let last = $.extend(true, {}, Store.luckysheet_select_save[Store.luckysheet_select_save.length - 1]);

            let top = 0, height = 0, rowseleted = [];
            if (last.top > row_pre) {
                top = row_pre;
                height = last.top + last.height - row_pre;

                if(last.row[1] > last.row_focus){
                    last.row[1] = last.row_focus;
                }

                rowseleted = [row_index, last.row[1]];
            }
            else if (last.top == row_pre) {
                top = row_pre;
                height = last.top + last.height - row_pre;
                rowseleted = [row_index, last.row[0]];
            }
            else {
                top = last.top;
                height = row - last.top - 1;

                if(last.row[0] < last.row_focus){
                    last.row[0] = last.row_focus;
                }

                rowseleted = [last.row[0], row_index];
            }

            let left = 0, width = 0, columnseleted = [];
            if (last.left > col_pre) {
                left = col_pre;
                width = last.left + last.width - col_pre;

                if(last.column[1] > last.column_focus){
                    last.column[1] = last.column_focus;
                }

                columnseleted = [col_index, last.column[1]];
            }
            else if (last.left == col_pre) {
                left = col_pre;
                width = last.left + last.width - col_pre;
                columnseleted = [col_index, last.column[0]];
            }
            else {
                left = last.left;
                width = col - last.left - 1;

                if(last.column[0] < last.column_focus){
                    last.column[0] = last.column_focus;
                }

                columnseleted = [last.column[0], col_index];
            }

            let changeparam = menuButton.mergeMoveMain(columnseleted, rowseleted, last, top, height, left, width);
            if(changeparam != null){
                columnseleted = changeparam[0];
                rowseleted= changeparam[1];
                top = changeparam[2];
                height = changeparam[3];
                left = changeparam[4];
                width = changeparam[5];
            }

            last["row"] = rowseleted;
            last["column"] = columnseleted;

            last["left_move"] = left;
            last["width_move"] = width;
            last["top_move"] = top;
            last["height_move"] = height;

            Store.luckysheet_select_save[Store.luckysheet_select_save.length - 1] = last;

            selectHightlightShow();
            
            luckysheetFreezen.scrollFreezen();
        }

        event.stopPropagation();
    })
    $(document).on("touchend", function(event){
        luckysheet_touchmove_status = false;
        luckysheet_touchmove_startPos = {};

        luckysheet_touchhandle_status = false;
    })

    //滑动选择选区
    $(document).on("touchstart", ".luckysheet-cs-touchhandle", function(event){
        luckysheet_touchhandle_status = true;
        event.stopPropagation();
    })  

    //禁止微信下拉拖出微信背景
    document.addEventListener("touchmove", function(event){
        event.preventDefault();
    }, {
        passive: false
    })
}