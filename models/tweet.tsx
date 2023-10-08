export class Tweet {
    tweetBy: string;
    event: string;
    date: string;
    link: string;
    tweetLink: string;

    constructor(tweetBy: string, event: string, date: string, link: string, tweetLink: string) {
        this.tweetBy = tweetBy;
        this.event = event;
        this.date = date;
        this.link = link;
        this.tweetLink = tweetLink;
    }

    static fromJSON(json: any): Tweet {
        return new Tweet(json['Tweet By'], json['Event'], json['Date'], json['Link'], json['Tweet Link']);
    }
}
