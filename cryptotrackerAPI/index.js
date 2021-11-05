const axios = require('axios')
const cheerio = require( 'cheerio' )
const express = require( 'express')
var cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
//Function to get top 10 Crypto currencies
async function getTop10() {
    try {
        const siteUrl = 'https://coinmarketcap.com/' ;

        const {data} = await axios({
            method: "GET",
            url: siteUrl,
        })

        const $ = cheerio.load(data)
        const elemSelector='#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div:nth-child(1) > div.h7vnx2-1.bFzXgL > table > tbody > tr'

        const keys = [
            'rank',
            'name',
            'price',
            '1 Day change',
            '7 days change',
            'marketCap',
            'volume',
            'circulation'
        ]
        const coinArr = [] ;

        $(elemSelector). each((parentIdx, parentElem) => {
            let keyIdx = 0;
            const coinObj = {};
            if (parentIdx <=9) {
                $(parentElem).children( ).each((childIdx, childElem) => {
                    let tdValue = $(childElem).text();
                    if(keyIdx === 1 || keyIdx === 6 ){
                        tdValue = $('p:first-child',$(childElem).html()).text()
                    }
                    if(tdValue)
                    {
                        coinObj[keys[keyIdx]]=tdValue;
                        keyIdx++
                    }
                } )
                coinArr.push(coinObj);

            }
        })
        return coinArr ;
    }
    catch (err) {
        console.error(err);
    }
}
getTop10();

//Function to get trending Crypto currencies
async function getTrending() {
    try {
        const siteUrl = 'https://coinmarketcap.com/trending-cryptocurrencies/' ;

        const {data} = await axios({
            method: "GET",
            url: siteUrl,
        })

        const $ = cheerio.load(data)
        const elemSelector='#__next > div.bywovg-1.sXmSU > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div > div.h7vnx2-1.bFzXgL > table > tbody > tr'

        const keys = [
            'rank',
            'name',
            'price',
            '1 Day change',
            '7 days change',
            '30 days change',
            'marketCap',
            'volume',
        ]
        const trendingArr = [] ;

        $(elemSelector). each((parentIdx, parentElem) => {
            let keyIdx = 0;
            const trendingObj = {};
            if (parentIdx <=9) {
                $(parentElem).children( ).each((childIdx, childElem) => {
                    let tdValue = $(childElem).text();
                    if(keyIdx === 1 ){
                        tdValue = $('p:first-child',$(childElem).html()).text()
                    }
                    if(tdValue)
                    {
                        trendingObj[keys[keyIdx]]=tdValue;
                        keyIdx++
                    }
                } )
                trendingArr.push(trendingObj);
            }
        })
        return trendingArr ;
    }
    catch (err) {
        console.error(err);
    }
}
getTrending()

//Function to get top gainers Crypto currencies
async function getTopGainers() {
    try {
        const siteUrl = 'https://coinmarketcap.com/gainers-losers/' ;

        const {data} = await axios({
            method: "GET",
            url: siteUrl,
        })

        const $ = cheerio.load(data)
        const elemSelector='#__next > div.bywovg-1.sXmSU > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-1yw69nc-0.DaVcG.table-wrap > div > div:nth-child(1) > div > table > tbody > tr'

        const keys = [
            'overall rank',
            'name',
            'price',
            '1 day change',
            'volume traded (24h)',
        ]
        const gainersArr = [] ;

        $(elemSelector). each((parentIdx, parentElem) => {
            let keyIdx = 0;
            const gainersObj = {};
            if (parentIdx <=9) {
                $(parentElem).children( ).each((childIdx, childElem) => {
                    let tdValue = $(childElem).text();
                    if(keyIdx === 1 ){
                        tdValue = $('p:first-child',$(childElem).html()).text()
                    }
                    if(tdValue)
                    {
                        gainersObj[keys[keyIdx]]=tdValue;
                        keyIdx++
                    }
                } )
                gainersArr.push(gainersObj);
            }
        })
        return gainersArr ;
    }
    catch (err) {
        console.error(err);
    }
}
getTopGainers()

//Function to get top losers Crypto currencies
async function getTopLosers() {
    try {
        const siteUrl = 'https://coinmarketcap.com/gainers-losers/' ;

        const {data} = await axios({
            method: "GET",
            url: siteUrl,
        })

        const $ = cheerio.load(data)
        const elemSelector='#__next > div.bywovg-1.sXmSU > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-1yw69nc-0.DaVcG.table-wrap > div > div:nth-child(2) > div > table > tbody > tr'

        const keys = [
            'overall rank',
            'name',
            'price',
            '1 day change',
            'volume traded (24h)',
        ]
        const losersArr = [] ;

        $(elemSelector). each((parentIdx, parentElem) => {
            let keyIdx = 0;
            const losersObj = {};
            if (parentIdx <=9) {
                $(parentElem).children( ).each((childIdx, childElem) => {
                    let tdValue = $(childElem).text();
                    if(keyIdx === 1 ){
                        tdValue = $('p:first-child',$(childElem).html()).text()
                    }
                    if(tdValue)
                    {
                        losersObj[keys[keyIdx]]=tdValue;
                        keyIdx++
                    }
                } )
                losersArr.push(losersObj);
            }
        })
        return losersArr ;
    }
    catch (err) {
        console.error(err);
    }
}
getTopLosers()

//Function to get most visited Crypto currencies
async function getMostVisited() {
    try {
        const siteUrl = 'https://coinmarketcap.com/most-viewed-pages/' ;

        const {data} = await axios({
            method: "GET",
            url: siteUrl,
        })

        const $ = cheerio.load(data)
        const elemSelector='#__next > div.bywovg-1.sXmSU > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div > div.h7vnx2-1.bFzXgL > table > tbody > tr'

        const keys = [
            'rank',
            'name',
            'price',
            '1 Day change',
            '7 days change',
            '30 days change',
            'marketCap',
            'volume',
        ]
        const mostvisitedArr = [] ;

        $(elemSelector). each((parentIdx, parentElem) => {
            let keyIdx = 0;
            const mostvisitedObj = {};
            if (parentIdx <=9) {
                $(parentElem).children( ).each((childIdx, childElem) => {
                    let tdValue = $(childElem).text();
                    if(keyIdx === 1 ){
                        tdValue = $('p:first-child',$(childElem).html()).text()
                    }
                    if(tdValue)
                    {
                        mostvisitedObj[keys[keyIdx]]=tdValue;
                        keyIdx++
                    }
                } )
                mostvisitedArr.push(mostvisitedObj);
            }
        })
        return mostvisitedArr ;
    }
    catch (err) {
        console.error(err);
    }
}
getMostVisited()

//Function to get recently added Crypto currencies
async function getRecentlyAdded() {
    try {
        const siteUrl = 'https://coinmarketcap.com/new/' ;

        const {data} = await axios({
            method: "GET",
            url: siteUrl,
        })

        const $ = cheerio.load(data)
        const elemSelector='#__next > div.bywovg-1.sXmSU > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.h7vnx2-1.bFzXgL > table > tbody > tr'

        const keys = [
            'rank',
            'name',
            'price',
            '1 hour change',
            '1 day change',
            'marketCap',
            'volume',
            'Blockchain',
            'added'
        ]
        const recentlyaddedArr = [] ;

        $(elemSelector). each((parentIdx, parentElem) => {
            let keyIdx = 0;
            const recentlyaddedObj = {};
            if (parentIdx <=9) {
                $(parentElem).children( ).each((childIdx, childElem) => {
                    let tdValue = $(childElem).text();
                    if(keyIdx === 1 ){
                        tdValue = $('p:first-child',$(childElem).html()).text()
                    }
                    if(tdValue)
                    {
                        recentlyaddedObj[keys[keyIdx]]=tdValue;
                        keyIdx++
                    }
                } )
                recentlyaddedArr.push(recentlyaddedObj);
                console.log(recentlyaddedObj);
            }
        })
        return recentlyaddedArr ;
    }
    catch (err) {
        console.error(err);
    }
}
getRecentlyAdded()





//Welcome Route
app.get('/', async (req, res) => {
    res.send('Welcome to Top 10 crypto ranker API. It is an API to fetch Top 10 ranked, trending, top gainers, top losers, most visited and recently added crypto currencies list. Thankyou. ');
});

//Route to get top 10 Crypto currencies
app.get('/api/top10', async (req, res) => {
    try {
        const top10 = await getTop10()
        return res.status(200).json({
        result: top10
    })
    }
    catch (err) {
        return res.status (500).json({
        err: err.toString(),
    })
    }
})

//Route to get trending Crypto currencies
app.get('/api/trending', async (req, res) => {
    try {
        const trending = await getTrending()
        return res.status(200).json({
        result: trending
    })
    }
    catch (err) {
        return res.status (500).json({
        err: err.toString(),
    })
    }
})

//Route to get top gainers Crypto currencies
app.get('/api/topgainers', async (req, res) => {
    try {
        const topGainers = await getTopGainers()
        return res.status(200).json({
        result: topGainers
    })
    }
    catch (err) {
        return res.status (500).json({
        err: err.toString(),
    })
    }
})

//Route to get top losers Crypto currencies
app.get('/api/toplosers', async (req, res) => {
    try {
        const topLosers = await getTopLosers()
        return res.status(200).json({
        result: topLosers
    })
    }
    catch (err) {
        return res.status (500).json({
        err: err.toString(),
    })
    }
})

//Route to get most visited Crypto currencies
app.get('/api/mostvisited', async (req, res) => {
    try {
        const mostVisited = await getMostVisited()
        return res.status(200).json({
        result: mostVisited
    })
    }
    catch (err) {
        return res.status (500).json({
        err: err.toString(),
    })
    }
})

//Route to get recently added Crypto currencies
app.get('/api/recentlyadded', async (req, res) => {
    try {
        const recentlyAdded = await getRecentlyAdded()
        return res.status(200).json({
        result: recentlyAdded
    })
    }
    catch (err) {
        return res.status (500).json({
        err: err.toString(),
    })
    }
})



app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));