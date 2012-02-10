function(doc) {
  if(doc.type=="board")
    emit(doc._id, null);
}
