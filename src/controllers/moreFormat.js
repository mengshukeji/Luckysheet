import { replaceHtml } from '../utils/util';
import { modelHTML } from './constant';
import menuButton from './menuButton';
import editor from '../global/editor';
import tooltip from '../global/tooltip';
import { isEditMode } from '../global/validate';
import Store from '../store';

//更多格式
const luckysheetMoreFormat = {
    moneyFmtList: [
        {
            "name": "人民币",
            "pos": "before",
            "value": "¥"
        }, {
            "name": "美元",
            "pos": "before",
            "value": "$"
        }, {
            "name": "欧元",
            "pos": "before",
            "value": "€"
        }, {
            "name": "英镑",
            "pos": "before",
            "value": "￡"
        }, {
            "name": "港元",
            "pos": "before",
            "value": "$"
        }, {
            "name": "日元",
            "pos": "before",
            "value": "￥"
        }, {
            "name": "阿尔巴尼亚列克",
            "pos": "before",
            "value": "Lek"
        }, {
            "name": "阿尔及利亚第纳尔",
            "pos": "before",
            "value": "din"
        }, {
            "name": "阿富汗尼",
            "pos": "after",
            "value": "Af"
        }, {
            "name": "阿根廷比索",
            "pos": "before",
            "value": "$"
        }, {
            "name": "阿拉伯联合酋长国迪拉姆",
            "pos": "before",
            "value": "dh"
        }, {
            "name": "阿鲁巴弗罗林",
            "pos": "before",
            "value": "Afl"
        }, {
            "name": "阿曼里亚尔",
            "pos": "before",
            "value": "Rial"
        }, {
            "name": "阿塞拜疆马纳特",
            "pos": "before",
            "value": "?"
        }, {
            "name": "埃及镑",
            "pos": "before",
            "value": "￡"
        }, {
            "name": "埃塞俄比亚比尔",
            "pos": "before",
            "value": "Birr"
        }, {
            "name": "安哥拉宽扎",
            "pos": "before",
            "value": "Kz"
        }, {
            "name": "澳大利亚元",
            "pos": "before",
            "value": "$"
        }, {
            "name": "澳门元",
            "pos": "before",
            "value": "MOP"
        }, {
            "name": "巴巴多斯元",
            "pos": "before",
            "value": "$"
        }, {
            "name": "巴布亚新几内亚基那",
            "pos": "before",
            "value": "PGK"
        }, {
            "name": "巴哈马元",
            "pos": "before",
            "value": "$"
        }, {
            "name": "巴基斯坦卢比",
            "pos": "before",
            "value": "Rs"
        }, {
            "name": "巴拉圭瓜拉尼",
            "pos": "after",
            "value": "Gs"
        }, {
            "name": "巴林第纳尔",
            "pos": "before",
            "value": "din"
        }, {
            "name": "巴拿马巴波亚",
            "pos": "before",
            "value": "B/"
        }, {
            "name": "巴西里亚伊",
            "pos": "before",
            "value": "R$"
        }, {
            "name": "白俄罗斯卢布",
            "pos": "after",
            "value": "р"
        }, {
            "name": "百慕大元",
            "pos": "before",
            "value": "$"
        }, {
            "name": "保加利亚列弗",
            "pos": "before",
            "value": "lev"
        }, {
            "name": "冰岛克朗",
            "pos": "before",
            "value": "kr"
        }, {
            "name": "波黑可兑换马克",
            "pos": "before",
            "value": "KM"
        }, {
            "name": "波兰兹罗提",
            "pos": "after",
            "value": "z?"
        }, {
            "name": "玻利维亚诺",
            "pos": "before",
            "value": "Bs"
        }, {
            "name": "伯利兹元",
            "pos": "before",
            "value": "$"
        }, {
            "name": "博茨瓦纳普拉",
            "pos": "before",
            "value": "P"
        }, {
            "name": "不丹努扎姆",
            "pos": "before",
            "value": "Nu"
        }, {
            "name": "布隆迪法郎",
            "pos": "before",
            "value": "FBu"
        }, {
            "name": "朝鲜圆",
            "pos": "before",
            "value": "?KP"
        }, {
            "name": "丹麦克朗",
            "pos": "after",
            "value": "kr"
        }, {
            "name": "东加勒比元",
            "pos": "before",
            "value": "$"
        }, {
            "name": "多米尼加比索",
            "pos": "before",
            "value": "RD$"
        }, {
            "name": "俄国卢布",
            "pos": "after",
            "value": "?"
        }, {
            "name": "厄立特里亚纳克法",
            "pos": "before",
            "value": "Nfk"
        }, {
            "name": "非洲金融共同体法郎",
            "pos": "before",
            "value": "CFA"
        }, {
            "name": "菲律宾比索",
            "pos": "before",
            "value": "?"
        }, {
            "name": "斐济元",
            "pos": "before",
            "value": "$"
        }, {
            "name": "佛得角埃斯库多",
            "pos": "before",
            "value": "CVE"
        }, {
            "name": "福克兰群岛镑",
            "pos": "before",
            "value": "￡"
        }, {
            "name": "冈比亚达拉西",
            "pos": "before",
            "value": "GMD"
        }, {
            "name": "刚果法郎",
            "pos": "before",
            "value": "FrCD"
        }, {
            "name": "哥伦比亚比索",
            "pos": "before",
            "value": "$"
        }, {
            "name": "哥斯达黎加科朗",
            "pos": "before",
            "value": "?"
        }, {
            "name": "古巴比索",
            "pos": "before",
            "value": "$"
        }, {
            "name": "古巴可兑换比索",
            "pos": "before",
            "value": "$"
        }, {
            "name": "圭亚那元",
            "pos": "before",
            "value": "$"
        }, {
            "name": "哈萨克斯坦坚戈",
            "pos": "before",
            "value": "?"
        }, {
            "name": "海地古德",
            "pos": "before",
            "value": "HTG"
        }, {
            "name": "韩元",
            "pos": "before",
            "value": "?"
        }, {
            "name": "荷属安的列斯盾",
            "pos": "before",
            "value": "NAf."
        }, {
            "name": "洪都拉斯拉伦皮拉",
            "pos": "before",
            "value": "L"
        }, {
            "name": "吉布提法郎",
            "pos": "before",
            "value": "Fdj"
        }, {
            "name": "吉尔吉斯斯坦索姆",
            "pos": "before",
            "value": "KGS"
        }, {
            "name": "几内亚法郎",
            "pos": "before",
            "value": "FG"
        }, {
            "name": "加拿大元",
            "pos": "before",
            "value": "$"
        }, {
            "name": "加纳塞地",
            "pos": "before",
            "value": "GHS"
        }, {
            "name": "柬埔寨瑞尔",
            "pos": "before",
            "value": "Riel"
        }, {
            "name": "捷克克朗",
            "pos": "after",
            "value": "K?"
        }, {
            "name": "津巴布韦元",
            "pos": "before",
            "value": "$"
        }, {
            "name": "卡塔尔里亚尔",
            "pos": "before",
            "value": "Rial"
        }, {
            "name": "开曼群岛元",
            "pos": "before",
            "value": "$"
        }, {
            "name": "科摩罗法郎",
            "pos": "before",
            "value": "CF"
        }, {
            "name": "科威特第纳尔",
            "pos": "before",
            "value": "din"
        }, {
            "name": "克罗地亚库纳",
            "pos": "before",
            "value": "kn"
        }, {
            "name": "肯尼亚先令",
            "pos": "before",
            "value": "Ksh"
        }, {
            "name": "莱索托洛蒂",
            "pos": "before",
            "value": "LSL"
        }, {
            "name": "老挝基普",
            "pos": "before",
            "value": "?"
        }, {
            "name": "黎巴嫩镑",
            "pos": "before",
            "value": "L￡"
        }, {
            "name": "立陶宛立特",
            "pos": "before",
            "value": "Lt"
        }, {
            "name": "利比亚第纳尔",
            "pos": "before",
            "value": "din"
        }, {
            "name": "利比亚元",
            "pos": "before",
            "value": "$"
        }, {
            "name": "卢旺达法郎",
            "pos": "before",
            "value": "RF"
        }, {
            "name": "罗马尼亚列伊",
            "pos": "before",
            "value": "RON"
        }, {
            "name": "马达加斯加阿里亚里",
            "pos": "before",
            "value": "Ar"
        }, {
            "name": "马尔代夫拉菲亚",
            "pos": "before",
            "value": "Rf"
        }, {
            "name": "马拉维克瓦查",
            "pos": "before",
            "value": "MWK"
        }, {
            "name": "马来西亚林吉特",
            "pos": "before",
            "value": "RM"
        }, {
            "name": "马其顿戴第纳尔",
            "pos": "before",
            "value": "din"
        }, {
            "name": "毛里求斯卢比",
            "pos": "before",
            "value": "MURs"
        }, {
            "name": "毛里塔尼亚乌吉亚",
            "pos": "before",
            "value": "MRO"
        }, {
            "name": "蒙古图格里克",
            "pos": "before",
            "value": "?"
        }, {
            "name": "孟加拉塔卡",
            "pos": "before",
            "value": "?"
        }, {
            "name": "秘鲁新索尔",
            "pos": "before",
            "value": "S/"
        }, {
            "name": "缅甸开亚特",
            "pos": "before",
            "value": "K"
        }, {
            "name": "摩尔多瓦列伊",
            "pos": "before",
            "value": "MDL"
        }, {
            "name": "摩洛哥迪拉姆",
            "pos": "before",
            "value": "dh"
        }, {
            "name": "莫桑比克梅蒂卡尔",
            "pos": "before",
            "value": "MTn"
        }, {
            "name": "墨西哥比索",
            "pos": "before",
            "value": "$"
        }, {
            "name": "纳米比亚元",
            "pos": "before",
            "value": "$"
        }, {
            "name": "南非兰特",
            "pos": "before",
            "value": "R"
        }, {
            "name": "南苏丹镑",
            "pos": "before",
            "value": "￡"
        }, {
            "name": "尼加拉瓜科多巴",
            "pos": "before",
            "value": "C$"
        }, {
            "name": "尼泊尔卢比",
            "pos": "before",
            "value": "Rs"
        }, {
            "name": "尼日利亚奈拉",
            "pos": "before",
            "value": "?"
        }, {
            "name": "挪威克朗",
            "pos": "after",
            "value": "kr"
        }, {
            "name": "乔治亚拉瑞",
            "pos": "before",
            "value": "GEL"
        }, {
            "name": "人民币（离岸）",
            "pos": "before",
            "value": "￥"
        }, {
            "name": "瑞典克朗",
            "pos": "after",
            "value": "kr"
        }, {
            "name": "瑞士法郎",
            "pos": "before",
            "value": "CHF"
        }, {
            "name": "塞尔维亚第纳尔",
            "pos": "before",
            "value": "din"
        }, {
            "name": "塞拉利昂利昂",
            "pos": "before",
            "value": "SLL"
        }, {
            "name": "塞舌尔卢比",
            "pos": "before",
            "value": "SCR"
        }, {
            "name": "沙特里亚尔",
            "pos": "before",
            "value": "Rial"
        }, {
            "name": "圣多美多布拉",
            "pos": "before",
            "value": "Db"
        }, {
            "name": "圣赫勒拿群岛磅",
            "pos": "before",
            "value": "￡"
        }, {
            "name": "斯里兰卡卢比",
            "pos": "before",
            "value": "Rs"
        }, {
            "name": "斯威士兰里兰吉尼",
            "pos": "before",
            "value": "SZL"
        }, {
            "name": "苏丹镑",
            "pos": "before",
            "value": "SDG"
        }, {
            "name": "苏里南元",
            "pos": "before",
            "value": "$"
        }, {
            "name": "所罗门群岛元",
            "pos": "before",
            "value": "$"
        }, {
            "name": "索马里先令",
            "pos": "before",
            "value": "SOS"
        }, {
            "name": "塔吉克斯坦索莫尼",
            "pos": "before",
            "value": "Som"
        }, {
            "name": "太平洋法郎",
            "pos": "after",
            "value": "FCFP"
        }, {
            "name": "泰国铢",
            "pos": "before",
            "value": "?"
        }, {
            "name": "坦桑尼亚先令",
            "pos": "before",
            "value": "TSh"
        }, {
            "name": "汤加潘加",
            "pos": "before",
            "value": "T$"
        }, {
            "name": "特立尼达和多巴哥元",
            "pos": "before",
            "value": "$"
        }, {
            "name": "突尼斯第纳尔",
            "pos": "before",
            "value": "din"
        }, {
            "name": "土耳其里拉",
            "pos": "before",
            "value": "?"
        }, {
            "name": "瓦努阿图瓦图",
            "pos": "before",
            "value": "VUV"
        }, {
            "name": "危地马拉格查尔",
            "pos": "before",
            "value": "Q"
        }, {
            "name": "委内瑞拉博利瓦",
            "pos": "before",
            "value": "Bs"
        }, {
            "name": "文莱元",
            "pos": "before",
            "value": "$"
        }, {
            "name": "乌干达先令",
            "pos": "before",
            "value": "UGX"
        }, {
            "name": "乌克兰格里夫尼亚",
            "pos": "before",
            "value": "грн."
        }, {
            "name": "乌拉圭比索",
            "pos": "before",
            "value": "$"
        }, {
            "name": "乌兹别克斯坦苏姆",
            "pos": "before",
            "value": "so?m"
        }, {
            "name": "西萨摩亚塔拉",
            "pos": "before",
            "value": "WST"
        }, {
            "name": "新加坡元",
            "pos": "before",
            "value": "$"
        }, {
            "name": "新台币",
            "pos": "before",
            "value": "NT$"
        }, {
            "name": "新西兰元",
            "pos": "before",
            "value": "$"
        }, {
            "name": "匈牙利福林",
            "pos": "before",
            "value": "Ft"
        }, {
            "name": "叙利亚镑",
            "pos": "before",
            "value": "￡"
        }, {
            "name": "牙买加元",
            "pos": "before",
            "value": "$"
        }, {
            "name": "亚美尼亚德拉姆",
            "pos": "before",
            "value": "Dram"
        }, {
            "name": "也门里亚尔",
            "pos": "before",
            "value": "Rial"
        }, {
            "name": "伊拉克第纳尔",
            "pos": "before",
            "value": "din"
        }, {
            "name": "伊朗里亚尔",
            "pos": "before",
            "value": "Rial"
        }, {
            "name": "以色列新谢克尔",
            "pos": "before",
            "value": "?"
        }, {
            "name": "印度卢比",
            "pos": "before",
            "value": "?"
        }, {
            "name": "印度尼西亚卢比",
            "pos": "before",
            "value": "Rp"
        }, {
            "name": "约旦第纳尔",
            "pos": "before",
            "value": "din"
        }, {
            "name": "越南盾",
            "pos": "after",
            "value": "?"
        }, {
            "name": "赞比亚克瓦查",
            "pos": "before",
            "value": "ZMW"
        }, {
            "name": "直布罗陀镑",
            "pos": "before",
            "value": "￡"
        }, {
            "name": "智利比索",
            "pos": "before",
            "value": "$"
        }, {
            "name": "中非金融合作法郎",
            "pos": "before",
            "value": "FCFA"
        }
    ],
    dateFmtList: [
        {
            "name": "1930-08-05",
            "value": "yyyy-MM-dd"
        },
        {
            "name": "1930/8/5",
            "value": "yyyy/MM/dd"
        },
        {
            "name": "1930年8月5日",
            "value": 'yyyy"年"M"月"d"日"'
        },
        {
            "name": "08-05",
            "value": "MM-dd"
        },
        {
            "name": "8-5",
            "value": "M-d"
        },
        {
            "name": "8月5日",
            "value": 'M"月"d"日"'
        },
        {
            "name": "13:30:30",
            "value": "h:mm:ss"
        },
        {
            "name": "13:30",
            "value": "h:mm"
        },
        {
            "name": "下午01:30",
            "value": 'AM/PM hh:mm'
        },
        {
            "name": "下午1:30",
            "value": 'AM/PM h:mm'
        },
        {
            "name": "下午1:30:30",
            "value": 'AM/PM h:mm:ss'
        },
        {
            "name": "08-05 下午01:30",
            "value": "MM-dd AM/PM hh:mm"
        },
        // {
        //     "name": "1930年8月5日星期二",
        //     "value": ''
        // },
        // {
        //     "name": "1930年8月5日星期二 下午1:30:30",
        //     "value": ''
        // },
    ],
    numFmtList: [
        {
            "name": "1235",
            "value": "0"
        },
        {
            "name": "1234.56",
            "value": "0.00"
        },
        {
            "name": "1,235",
            "value": "#,##0"
        },
        {
            "name": "1,234.56",
            "value": "#,##0.00"
        },
        {
            "name": "1,235",
            "value": "#,##0_);(#,##0)"
        },
        {
            "name": "1,235",
            "value": "#,##0_);[Red](#,##0)"
        },
        {
            "name": "1,234.56",
            "value": "#,##0.00_);(#,##0.00)"
        },
        {
            "name": "1,234.56",
            "value": "#,##0.00_);[Red](#,##0.00)"
        },
        {
            "name": "$1,235",
            "value": "$#,##0_);($#,##0)"
        },
        {
            "name": "$1,235",
            "value": "$#,##0_);[Red]($#,##0)"
        },
        {
            "name": "$1,234.56",
            "value": "$#,##0.00_);($#,##0.00)"
        },
        {
            "name": "$1,234.56",
            "value": "$#,##0.00_);[Red]($#,##0.00)"
        },
        {
            "name": "1234.56",
            "value": "@"
        },
        {
            "name": "123456%",
            "value": "0%"
        },
        {
            "name": "123456.00%",
            "value": "0.00%"
        },
        {
            "name": "1.23E+03",
            "value": "0.00E+00"
        },
        {
            "name": "1.2E+3",
            "value": "##0.0E+0"
        },
        {
            "name": "1234 5/9",
            "value": "# ?/?"
        },
        {
            "name": "1234 14/25",
            "value": "# ??/??"
        },
        {
            "name": "$ 1,235",
            "value": '_($* #,##0_);_(...($* "-"_);_(@_)'
        },
        {
            "name": "1,235",
            "value": '_(* #,##0_);_(*..._(* "-"_);_(@_)'
        },
        {
            "name": "$ 1,234.56",
            // "value": '_($* #,##0.00_)...* "-"??_);_(@_)'
            "value": '_($* #,##0.00_);_(...($* "-"_);_(@_)'
        },
        {
            "name": "1,234.56",
            "value": '_(* #,##0.00_);...* "-"??_);_(@_)'
        },
    ],
    createDialog: function(type){
        let _this = this;

        $("#luckysheet-modal-dialog-mask").show();
        $("#luckysheet-moreFormat-dialog").remove();

        let title = "", content = '';

        if(type == "morecurrency"){ //货币
            title = "货币格式";

            let listHtml = '';

            for(let i = 0; i < _this.moneyFmtList.length; i++){
                let name = _this.moneyFmtList[i]["name"];
                let pos = _this.moneyFmtList[i]["pos"];
                let value = _this.moneyFmtList[i]["value"];

                listHtml += '<div class="listItem">'+
                                '<div class="name">'+ name +'</div>'+
                                '<div class="value">'+ value +'</div>'+
                                '<input type="hidden" value="'+ pos +'"/>'+
                            '</div>';
            }

            content = '<div class="box" id="morecurrency">'+
                        '<div class="decimal">'+
                            '<label>小数位数：</label>'+
                            '<input type="number" class="formulaInputFocus" value="2" min="0" max="9"/>'+
                        '</div>'+
                        '<div class="listbox">'+ listHtml +'</div>'+
                      '</div>';
        }
        else if(type == "moredatetime"){ //日期时间
            title = "日期与时间格式";

            let listHtml = '';

            for(let i = 0; i < _this.dateFmtList.length; i++){
                let name = _this.dateFmtList[i]["name"];
                let value = _this.dateFmtList[i]["value"];

                listHtml += '<div class="listItem">'+
                                '<div class="name">'+ name +'</div>'+
                                '<div class="value">'+ value +'</div>'+
                            '</div>';
            }

            content = '<div class="box" id="moredatetime">'+
                        '<div class="listbox">'+ listHtml +'</div>'+
                      '</div>';
        }
        else if(type == "moredigit"){ //数字
            title = "数字格式";

            let listHtml = '';

            for(let i = 0; i < _this.numFmtList.length; i++){
                let name = _this.numFmtList[i]["name"];
                let value = _this.numFmtList[i]["value"];

                listHtml += '<div class="listItem">'+
                                '<div class="name">'+ name +'</div>'+
                                '<div class="value">'+ value +'</div>'+
                            '</div>';
            }

            content = '<div class="box" id="moredigit">'+
                        '<div class="listbox">'+ listHtml +'</div>'+
                      '</div>';
        }

        $("body").append(replaceHtml(modelHTML, { 
            "id": "luckysheet-moreFormat-dialog", 
            "addclass": "luckysheet-moreFormat-dialog", 
            "title": title, 
            "content": content, 
            "botton": '<button id="luckysheet-moreFormat-dialog-confirm" class="btn btn-primary">确定</button><button class="btn btn-default luckysheet-model-close-btn">取消</button>', 
            "style": "z-index:100003" 
        }));
        let $t = $("#luckysheet-moreFormat-dialog").find(".luckysheet-modal-dialog-content").css("min-width", 400).end(), 
            myh = $t.outerHeight(), 
            myw = $t.outerWidth();
        let winw = $(window).width(), winh = $(window).height();
        let scrollLeft = $(document).scrollLeft(), scrollTop = $(document).scrollTop();
        $("#luckysheet-moreFormat-dialog").css({ "left": (winw + scrollLeft - myw) / 2, "top": (winh + scrollTop - myh) / 3 }).show();
        
        $("#luckysheet-moreFormat-dialog .listbox .listItem").eq(0).addClass("on");
    },
    init: function(){
        let _this = this;

        //选择格式
        $(document).on("click", "#luckysheet-moreFormat-dialog .listbox .listItem", function(){
            $(this).addClass("on").siblings().removeClass("on");
        });

        //确定
        $(document).off("click.moreFormatConfirm").on("click.moreFormatConfirm", "#luckysheet-moreFormat-dialog #luckysheet-moreFormat-dialog-confirm", function(){
            $("#luckysheet-moreFormat-dialog").hide();
            $("#luckysheet-modal-dialog-mask").hide();

            let d = editor.deepCopyFlowData(Store.flowdata);

            let value = $("#luckysheet-moreFormat-dialog .listbox .listItem.on .value").text();
            let id = $(this).parents("#luckysheet-moreFormat-dialog").find(".box").attr("id");

            if(id == "morecurrency"){ //货币
                if(value.indexOf("?") != -1){
                    return;
                }

                let decimal = parseInt($("#luckysheet-moreFormat-dialog .decimal input").val().trim());

                if(decimal.toString() == "NaN" || decimal < 0 || decimal > 9){
                    if(isEditMode()){
                        alert("小数位数必须在0-9之间！");
                    }   
                    else{
                        tooltip.info("小数位数必须在0-9之间！", "");
                    }

                    return;
                }

                let str = "";

                if(decimal > 0){
                    for(let i = 1; i <= decimal; i++){
                        str += "0";
                    }

                    str = "0." + str;
                }
                else{
                    str = "#";
                }

                let pos = $("#luckysheet-moreFormat-dialog .listbox .listItem.on input:hidden").val();

                if(pos == "before"){
                    str = '"' + value + '" ' + str;
                }
                else if(pos == "after"){
                    str = str + ' "' + value + '"';
                }

                menuButton.updateFormat(d, "ct", str);
            }
            else if(id == "moredatetime"){ //日期时间
                menuButton.updateFormat(d, "ct", value);
            }
            else if(id == "moredigit"){ //数字
                menuButton.updateFormat(d, "ct", value);
            }
        })
    }
}

export default luckysheetMoreFormat;