import axios from "axios";
import moment from "moment";
window.axios = axios;
window.moment = moment;
var Utils = {
  isParam(allCalculations, paramObj) {
    var isParam = allCalculations.find((item) => {
      return item.ColumnName == paramObj;
    });
    return isParam;
  },

  getParamsList(allCalculations, expression) {
    var varsList = expression.match(/\[(.*?)\]/g);
    var paramsList = [];
    if (!varsList) return paramsList;
    varsList.forEach((item) => {
      var existCalculation = Utils.isParam(allCalculations, item);
      if (existCalculation) {
        var obj = {
          name: item,
          expression: "(" + existCalculation.Expression + ")",
        };
        paramsList.push(obj);
      }
    });
    return paramsList;
  },

  encode(str) {
    return str.replace(/./g, function(c) {
      return ("00" + c.charCodeAt(0)).slice(-3);
    });
  },

  array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
  },
  decode(str) {
    str = str || "";
    return str.replace(/.{3}/g, function(c) {
      return String.fromCharCode(c);
    });
  },

  getUrlparam(n, s) {
    n = n.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var p = new RegExp("[\\?&]" + n + "=([^&#]*)").exec(s);
    return p === null ? "" : p[1];
  },

  isIpadOS() {
    return (
      navigator.maxTouchPoints &&
      navigator.maxTouchPoints > 2 &&
      /MacIntel/.test(navigator.platform)
    );
  },

  isTablet() {
    var userAgent = navigator.userAgent.toLowerCase();
    var isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
      userAgent
    );
    return isTablet;
  },

  isMobile() {
    var isTablet = Utils.isTablet();
    var isIpadOS = Utils.isIpadOS();
    var check = false;
    (function(a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check || isTablet || isIpadOS;
  },

  tryParse(str) {
    try {
      var obj = JSON.parse(str);
      return obj;
    } catch {
      return null;
    }
  },

  confirmChanges(scope, msg, btnYes, btnNo, title) {
    btnYes = btnYes || "YES";
    btnNo = btnNo || "NO";
    title = title || "Confirm deletion";
    var defaultMsg = "Are you sure want to delete selected item ?";
    msg = msg || defaultMsg;
    return scope.$bvModal.msgBoxConfirm(msg, {
      title: title,
      size: "sm",
      buttonSize: "sm",
      okVariant: "primary",
      okTitle: btnYes,
      cancelTitle: btnNo,
      footerClass: "p-2",
      noCloseOnBackdrop: true,
      hideHeaderClose: false,
      centered: true,
    });
  },

  confirmDelete: function(scope, msg, btnYes, btnNo, title) {
    btnYes = btnYes || "YES";
    btnNo = btnNo || "NO";
    title = title || "Confirm deletion";
    var defaultMsg = "Are you sure want to delete selected item ?";
    msg = msg || defaultMsg;
    return scope.$bvModal.msgBoxConfirm(msg, {
      title: title,
      size: "sm",
      buttonSize: "sm",
      okVariant: "danger",
      okTitle: btnYes,
      cancelTitle: btnNo,
      footerClass: "p-2",
      hideHeaderClose: false,
      centered: true,
    });
  },

  blankPromise: () =>
    new Promise((resolve) => {
      var obj = { test: 123 };
      resolve(obj);
    }),

  toBase64: (file, keepFileName) =>
    new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        var dataUrl = reader.result;
        var mimeType = dataUrl.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0];
        var fileNameBase = Date.now() + "." + mimeType.split("/")[1];
        if (keepFileName) fileNameBase = file.name;
        var param = {
          base64: dataUrl,
          mimeType: mimeType,
          fileName: fileNameBase,
        };
        resolve(param);
      };
      reader.onerror = (error) => reject(error);
    }),

  parseDate(date) {
    if (!date) return "";
    var dateObj = new Date(date);
    var dateStr = dateObj.toISOString().split("T")[0];
    return dateStr;
  },

  formatDate(date, deli, format) {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;
    deli = deli || "/";

    if (format && format == "ymd") {
      return year + deli + month + deli + day;
    }

    return month + deli + day + deli + year;
  },

  arrayToObj: (array, keyField) =>
    array.reduce((obj, item) => {
      obj[item[keyField]] = item;
      return obj;
    }, {}),

  cloneObj: function(obj) {
    var objStr = JSON.stringify(obj);
    var newObj = JSON.parse(objStr);
    return newObj;
  },

  copyInputValue(elem) {
    var copyText = document.querySelector(elem);
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    Utils.toast("Copied", "success");
  },

  toast: function(msg, type, timeout) {
    if (!type) type = "success";

    var iconObj = {
      success: "check-circle",
      info: "exclamation-circle",
      error: "exclamation-triangle",
    };

    const h = Utils.$createElement;
    // Create the title
    var iconCls = "fa-" + iconObj[type];
    const vNodesTitle = h("div", { class: [] }, [
      h(
        "span",
        {
          props: { style: "color:#9ce" },
          class: ["fas", iconCls, type, "mr-1"],
        },
        ""
      ),
      msg,
    ]);
    // Pass the vNodes as an array for message and title
    Utils.$bvToast.toast(" ", {
      title: [vNodesTitle],
      autoHideDelay: timeout || 2000,
    });
  },

  uuid: function() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  },

  genAvatarText: function(firstName, lastName) {
    firstName = firstName || "";
    lastName = lastName || "";
    var firstCharacter = firstName.substring(0, 1);
    var secondCharacter = lastName.substring(0, 1);
    var rs = firstCharacter + secondCharacter;
    return rs.toUpperCase();
  },
  formatDateTime(dateTime) {
    var date =
      moment(dateTime).format("DD") + " " + moment(dateTime).format("MMM");
    var time = moment(dateTime).format("hh:mm A");
    return date + " - " + time;
  },
  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },
  getApiAjax(url) {
    return $.ajax(url);
  },
  ajaxGet(url) {
    return $.ajax(url);
  },
  getUrlAPI() {
    //var urlAPI = window.location.origin + "/";
    //return urlAPI
    return "http://localhost:53986/"
    //return "http://118.70.127.145:8000/"
  },
  getData(endpoint) {
    let url = Utils.getUrlAPI() + endpoint;
    return axios.get(url);
  },
  postData(data, endpoint) {
    let url = Utils.getUrlAPI() + endpoint;
    return axios.post(url, data);
  },
  postDataExtend(url,data) {
    return axios.post(url, data);
  },
  convertDateTime(dateTime) {
    let data = dateTime.split(" ")[0];
    let time = dateTime.split(" ")[1];
    data = data.split("-");
    let dateFormat = data.reverse().join("-");
    return dateFormat + " " + time;
  },
  reverseDateTime(dateTime) {
    let data = dateTime.split(" ")[0];
    let time = dateTime.split(" ")[1];
    data = data.split("/");
    let temp = data[0];
    data[0] = data[1];
    data[1] = temp;
    let dateFormat = data.join("-");
    return dateFormat + " " + time;
  },
};

export default Utils;

window.Utils = Utils;
