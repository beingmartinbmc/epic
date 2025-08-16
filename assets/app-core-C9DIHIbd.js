function c(t){if(!t)return null;try{return new URL(t.trim()).toString()}catch{try{const r="https://"+t.trim().replace(/^https?:\/\//,"");return new URL(r).toString()}catch{return null}}}export{c};
