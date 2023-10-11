/*
DOM
*/
const addBtn = document.querySelector('#add-btn');


/*
function
*/
const onClickAdd = () => {
  const addText = document.querySelector('#add-text');
  // テキストボックスの中の値を取得し、初期化する
  const inputText = addText.value;  // .valueでinout内の文字（値）を取得する
  addText.value = ""; // inputTextに代入後、input内の文字を空文字（削除）にする

  createIncomplateList(inputText);
};

  // 未完了リストから指定の要素を削除
  const deleteFromincomplateList = (target) => {
    // 押された削除ボタンの親タグの未完了リストからの削除
    const deleteTarget = target;
    const inComplateList = document.querySelector('#incomplate-list');
    inComplateList.removeChild(deleteTarget); // 子要素を削除（remove）する
  };

  // 未完了リストに追加する関数
  const createIncomplateList = (text) => {
  
  // liタグの生成 
  const li = document.createElement('li');

  // div生成
  const div = document.createElement('div');
  div.className = 'list-row'; //divタグにclass名を付与する
  
  // pタグ(Todo-title)の生成
  const  p = document.createElement('p');
  p.innerText = text;
  p.className = 'list-title';

  // 完了ボタンの生成
  const complateBtn = document.createElement('button');
  complateBtn.innerText = "完了";
  complateBtn.className = 'btn';
  // 完了ボタンのイベント作成
  complateBtn.addEventListener('click', () => {
    // 未完了リストからの削除
    comlateFromIncomplateList(div.parentNode);
    
    // 完了リストに追加する要素
    const addTarget = div.parentNode; //親は<li>
    // Todo内容のテキストを取得
    const text = div.firstElementChild.innerText; //最初の子要素(p)

    // li以下を初期化する
    addTarget.textContent = null;

    // divタグの生成
    const newDiv = document.createElement('div');
    newDiv.className = 'list-row';

    // pタグの生成
    const newListTitle = document.createElement('p');
    newListTitle.innerText = text;
    newListTitle.className = 'list-title';

    // buttonタグの生成
    const backButton = document.createElement('button');
    backButton.innerText = "戻す";
    backButton.className = 'btn';
    // 戻すボタンのイベント作成
    backButton.addEventListener('click', () => {
      // 押され戻すボタンの親タグを完了リストから削除
      const deleteTarget = newDiv.parentNode;
      const complateList = document.querySelector('#complate-list');
      complateList.removeChild(deleteTarget);
      
      // テキストの取得
      const text = newDiv.firstElementChild.innerText;
      createIncomplateList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(newDiv);
    newDiv.appendChild(newListTitle);
    newDiv.appendChild(backButton);
  });

  // 削除ボタンの生成
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = "削除";
  deleteBtn.className = 'btn';
  // 削除ボタンのイベント作成
  deleteBtn.addEventListener('click', () => {
    deleteFromincomplateList(div.parentNode);
  });

    // liタグ等の子要素に各要素の設定
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(complateBtn);
    div.appendChild(deleteBtn);

  // 未完了のリストの新規生成
  const inComplateList = document.querySelector('#incomplate-list');
  inComplateList.appendChild(li);

  // 未完了リストから指定の要素を完了リストに送る
  const comlateFromIncomplateList = (target) => {
    const complateTarget = target;
    const complateList = document.querySelector('#complate-list');
    complateList.appendChild(complateTarget);
  };



  };




/*
イベント
 */
addBtn.addEventListener('click', () => onClickAdd());
