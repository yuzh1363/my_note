import { defineStore } from "pinia";

export const useNoteStore = defineStore('note', {
    state: () => ({
        //數據
        notes: [{
            id: 1,
            title: '沖繩行程規劃中',
            content: '美麗海海生館、國際通、波上宮',
            isPinned:true
        },
        {
            id: 2,
            title: '東京行程規劃',
            content: '第一天：淺草寺、晴空塔；第二天：迪士尼樂園；第三天：澀谷逛街',
            isPinned: true
        },
        {
            id: 3,
            title: '大阪美食清單',
            content: '章魚燒、大阪燒、串炸、拉麵，道頓堀吃透透',
            isPinned: false
        },
        {
            id: 4,
            title: '京都神社巡禮',
            content: '清水寺求籤、伏見稻荷大社拍千本鳥居、金閣寺看夕陽',
            isPinned: false
        },
        {
            id: 5,
            title: '北海道滑雪',
            content: '二世谷滑雪場預約教練，準備保暖衣物和裝備',
            isPinned: false
        },
        {
            id: 6,
            title: '購買伴手禮',
            content: '白色戀人、東京香蕉、抹茶粉、藥妝店採購清單',
            isPinned: true
        }
    ],
    searchResult:[]
    }),
    getters: {
        showPinned(){
            return this.notes.filter(note => note.isPinned)
        },showUnPinned(){
            return this.notes.filter(note => !note.isPinned)
        }
    },
    actions: {
        addNote(item){
            const last_id = this.notes.length + 1;
            this.notes.push({
                id:last_id,
                title: item.title,
                content:item.content,
                isPinned:false
            })
            return true
        },
        editNote(id,new_title,new_content){
            const note = this.notes.find(item => item.id ===id)
            if(!note) return false
            note.title = new_title
            note.content = new_content
            return true
        },
        searchNote(keyword){
            this.searchResult = this.notes.filter(item => item.title.includes(keyword) || item.content.includes(keyword))
            return this.searchResult
        },
        deleteNote(id){
            if(confirm('確定要刪除這條筆記嗎？'))
            this.notes = this.notes.filter(item => item.id !== id)
        },
        selectPinned(id){
            const res = this.notes.find(item => item.id == id)
            console.log(res);
            res.isPinned = !res.isPinned
        }
    }
})