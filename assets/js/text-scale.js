
const TABLE_MISC = "rf-misc";

const addTextScale = (textElem) => {
  const scale = document.createElement("input");
  const savedScaleValue = getItem(TABLE_MISC, "textScale");

  // set attribuse
  scale.type = "range";
  scale.min = "50";
  scale.max = "255";
  scale.step = "0.01";
  scale.style.minWidth = "100%";
  scale.style.margin = "0";
  scale.value = savedScaleValue || "125";

  // update attributes
  textElem.style.fontSize = scale.value+'%';
  scale.oninput = () => {
    textElem.style.fontSize = scale.value.toString()+'%';
    saveItem(TABLE_MISC, "textScale", scale.value);
  }

  textElem.after(scale);
  return textElem
}