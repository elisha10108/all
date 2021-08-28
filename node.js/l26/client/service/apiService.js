const doApi = async (_url) => {
  try {
    let resp = await fetch(_url);
    let data = await resp.json();
    return data;
  }
  catch (err) {
    return { err: err }
  }
}

// פונקציה לבקשה למיטודות
// POST,DELETE ,PUT 
// עם יכולת לשלוח באדי גם
const doApiMethod = async(_url,_method,_payloadBody = {}) => {
  try {
  let resp = await fetch(_url,{
    method:_method,
    body:JSON.stringify(_payloadBody),
    headers: { 'content-type': "application/json" }
  })
  let data = await resp.json();
  return data;
  }
  catch (err) {
    return { err: err }
  }
}