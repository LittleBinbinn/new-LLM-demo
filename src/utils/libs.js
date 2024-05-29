//防抖函数
function throttle(fn, interval, leading = true) {
  let startTime = 0;
  const _throttle = function (args) {
    //获取当前时间
    const nowTime = new Date().getTime();
    //不立即执行控制
    if (!leading && startTime === 0) {
      startTime = nowTime;
    }
    // console.log(startTime, "222");
    //2.计算需要等待的时间
    const waitTime = interval - (nowTime - startTime);

    //第一次starttime是0,后面是很大的数,算差值
    if (waitTime <= 0) {
      fn.apply(this, args);
      startTime = nowTime;
    }
  };
  return _throttle;
}
//节流函数
function debounece(fn, delay) {
  //1 用于记录上一次事件触发的timer
  let timer = null;
  //2.触发事件时执行的函数
  const _debounce = function (...args) {
    //如有更多次触发 ,取消上一次计时
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null; //执行过函数之后,将timer置为null
    }, delay);
  };

  //返回一个新函数
  return _debounce;
}
//格式化日期
function dateFormat(timestamp, format) {
  if (!timestamp) {
    return "";
  } else if (timestamp < 9680917502) {
    timestamp = timestamp * 1000;
  }
  let year, month, day, HH, mm, ss;
  let time = new Date(timestamp);
  let timeDate;
  year = time.getFullYear(); // 年
  month = time.getMonth() + 1; // 月
  day = time.getDate(); // 日
  HH = time.getHours(); // 时
  mm = time.getMinutes(); // 分
  ss = time.getSeconds(); // 秒

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  HH = HH < 10 ? "0" + HH : HH; // 时
  mm = mm < 10 ? "0" + mm : mm; // 分
  ss = ss < 10 ? "0" + ss : ss; // 秒

  switch (format) {
    case "yyyy":
      timeDate = String(year);
      break;
    case "yyyy-MM":
      timeDate = year + "-" + month;
      break;
    case "yyyy-MM-dd":
      timeDate = year + "-" + month + "-" + day;
      break;
    case "yyyy/MM/dd":
      timeDate = year + "/" + month + "/" + day;
      break;
    case "yyyy-MM-dd HH:mm:ss":
      timeDate =
        year + "-" + month + "-" + day + " " + HH + ":" + mm + ":" + ss;
      break;
    case "HH:mm:ss":
      timeDate = HH + ":" + mm + ":" + ss;
      break;
    case "MM":
      timeDate = String(month);
      break;
    default:
      timeDate =
        year + "-" + month + "-" + day + " " + HH + ":" + mm + ":" + ss;
      break;
  }
  return timeDate;
}

// 判断数组中是否包含某个元素
function arrayContains(array, value, compare) {
  if (!array) {
    return false;
  }

  if (typeof compare !== "function") {
    compare = function (v1, v2) {
      return v1 === v2;
    };
  }
  for (let i = 0; i < array.length; i++) {
    if (compare(array[i], value)) {
      return true;
    }
  }
  return false;
}

// 删除数组中指定的元素
function removeArrayItem(array, value, compare) {
  if (typeof compare !== "function") {
    compare = function (v1, v2) {
      return v1 === v2;
    };
  }
  for (let i = 0; i < array.length; i++) {
    if (compare(array[i], value)) {
      array.splice(i, 1);
      break;
    }
  }
  return array;
}

// 拷贝对象
function copyObj(origin) {
  return JSON.parse(JSON.stringify(origin));
}

// 字符串截取
function substr(str, length) {
  let result = "";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    const charCode = str.charCodeAt(i);

    // 判断字符是否为中文字符
    if (charCode >= 0x4e00 && charCode <= 0x9fff) {
      // 中文字符算两个字符
      count += 2;
    } else {
      count++;
    }

    if (count <= length) {
      result += char;
    } else {
      result += " ...";
      break;
    }
  }

  return result;
}

export default {
  throttle, //防抖函数
  debounece, //节流函数
  dateFormat, //格式化日期
  substr, // 判断数组中是否包含某个元素
  copyObj, // 删除数组中指定的元素
  removeArrayItem, // 拷贝对象
  arrayContains, // 字符串截取
};
