const request;
const db;

const init = (dbName, version) => {
  request = window.indexedDB.open(dbName, version);

  request.onerror = (event) => {
    console.error("数据库打开错误");
  }
  
  request.onsuccess = event => {
    db = request.result;
    console.info("数据库打开成功");
  }

  request.onupgradeneeded = event => {
    db = event.target.result;
    console.info("数据库更新成功");
  }
};

const createTb = (tablename, key) => {
  let objectStore;
  if(!db.objectStoreNames.contains(tablename)) {
    objectStore = db.createObjectStore(tablename, 
      key
      ? { keyPath: key }
      : { autoIncrement: true }
    )
  } else {
    console.log("表名重复");
  }
}

/**
 * 新增记录
 *
 * @param {*} tablename
 * @param {*} data
 */
const add = (tablename, data) => {
  let addReq = db.transaction([tablename], 'readwrite')
    .objectStore(tablename)
    .add(data);
  
    addReq.onsuccess = e => {
      console.info("数据写入成功");
    }

    addReq.onerror = e => {
      console.info("数据写入失败");
    }
}

const read = (tablename, queryData) => {
  let trans = bd.transaction([tablename]),
    objectStore = trans.objectStore(tablename),
    req = objectStore.get(queryData);

  req.onerror = e => {
    console.error("查询失败");
  }

  req.onsuccess = e => {
    if(req.result) {
      // 返回
    } else {
      console.log("未查到数据记录");
    }
  }
}

const update = () => {

}

const remove = () => {

}

(function(win){
  'use strict';
  
})
