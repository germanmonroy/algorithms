function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join("-");
}

urlSlug(" Winter Is  Coming");
