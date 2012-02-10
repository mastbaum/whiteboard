function(doc) {
  if (doc.type=="block")
    emit(doc.board_id, doc)
}
