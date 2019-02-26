import { Map } from 'immutable';

export const addBlockData = (editor, data) => {
  const { value } = editor;
  const { blocks } = value;

  if (blocks) {
    blocks.forEach(block => {
      const mapData = Map(data);
      const originalDataAttr = block.get('data') || Map({});
      const newData = originalDataAttr.merge(mapData);
      const newBlock = block.set('data', newData);

      editor.setBlocks(newBlock);
    });
  }

  return editor;
};

export const deleteDataByKey = (editor, dataKey) => {
  const { value } = editor;
  const { blocks } = value;

  if (blocks) {
    blocks.forEach(block => {
      const originalData = block.get('data');
      const newData = originalData.delete(dataKey);
      const newBlock = block.set('data', newData);

      editor.setBlocks(newBlock);
    });
  }

  return editor;
};

export const wrapLink = (editor, href) => {
  editor.wrapInline({
    type: 'link',
    data: { href },
  });

  return editor.moveToEnd();
};

export const unwrapLink = editor => editor.unwrapInline('link');

export const wrapComment = (editor, key) => {
  editor.wrapInline({
    type: 'comment',
    data: { key },
  });

  return editor.moveToEnd();
};

export const unwrapComment = editor => editor.unwrapInline('comment');

export const unwrapCommentByNodeKey = (editor, key) => editor.unwrapInlineByKey(key, 'comment');
