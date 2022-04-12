const myNews = [
    {
        title: 'Welcome To My Blog!',
        incident: 'Today was difficult for me. Because, I spent my whole day for making this portfolio. And I hope you guys like that of course.',
        date: function() {
            let currentDate = new Date('2022/04/12');
            return currentDate.toDateString();
        },
        time: function() {
            let currentTime = '10:11:12';
            return currentTime;
        }
    },
    {
        title: 'Uploaded to Netlify Today',
        incident: 'I hope, I will hurry to make this app up today. I am trying my best to end this.',
        date: function() {
            let currentDate = new Date('2022/04/12');
            return currentDate.toDateString();
        },
        time: function() {
            let currentTime = '11:22:14';
            return currentTime;
        }
    },
    {
        title: 'Siuuuuu.., I finnally end my portfolio part!',
        incident: 'I finnally end this.',
        
        date: function() {
            let currentDate = new Date('2022/04/12');
            return currentDate.toDateString();
        },
        time: function() {
            let currentTime = '12:16:15';
            return currentTime;
        }
        
    },
]   

export default myNews.reverse();