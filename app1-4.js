console.log("=======================");
console.log("現在持っているタスク一覧");
console.log("=======================");

const addtask = [
    '[内容]机を片付ける、[ジャンル]掃除',
    '[内容]牛乳を買う、[ジャンル]買い物',
    '[内容]寝る、[ジャンル]睡眠'
]
addtask.forEach((task, index) => {
    console.log(`${index} : ${task}`);
});
const addtaskcord = prompt("タスクを入力してください");
const addtask12 = prompt("ジャンルを入力してください");
alert("新しいタスクが入力されました");
console.log("======================");
console.log("現在持っているタスク一覧");
console.log("======================");

const task = {};
const {
    type,
    content} = task;
const tasks = [];
tasks.push(task);
addtask.push(addtaskcord, addtask12);
tasks.forEach((i,tasks) => {
    for(i=0; i<3; i++){
        console.log(`${i} : ${addtask[i]}`)
    }console.log(`${i} : [内容] ${addtaskcord}、 [ジャンル] ${addtask12}、`)
});
prompt('「確認　追加　削除　終了」の4ついづれかを入力してください');
