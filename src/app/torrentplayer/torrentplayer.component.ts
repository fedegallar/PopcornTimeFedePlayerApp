import { Component, OnInit } from '@angular/core';
import {WebTorrent} from 'webtorrent';
<<<<<<< HEAD
import { Router, ActivatedRoute } from '@angular/router';
import { Torrent } from 'parse-torrent-file';
=======

>>>>>>> 8d00eb36a605bc7b75b322bffb56ad6560d0aa0d
@Component({
  selector: 'app-torrentplayer',
  templateUrl: './torrentplayer.component.html',
  styleUrls: ['./torrentplayer.component.css']
})
export class TorrentplayerComponent implements OnInit {
<<<<<<< HEAD
  router: Router;
  magnet:string;
  progreso:any;
  velocidad_descarga:any;
  constructor(private route: ActivatedRoute) { }
ngOnInit() {
  this.route.params.subscribe(params =>{this.magnet = params['magnet']});
  var WebTorrent = require('webtorrent-hybrid');
  var client = new WebTorrent()
  
  var torrentId = this.magnet;

client.add(torrentId, function (torrent) {
=======

  private torrentId:String = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent';
  constructor() { }
  client: WebTorrent;
  ngOnInit() {

    

var torrentId = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'

this.client.add(torrentId, function (torrent) {
>>>>>>> 8d00eb36a605bc7b75b322bffb56ad6560d0aa0d
  // Torrents can contain many files. Let's use the .mp4 file
  var file = torrent.files.find(function (file) {
    return file.name.endsWith('.mp4')
  })
<<<<<<< HEAD
  torrent.on('download', function (bytes) {
    console.log('download speed: ' + torrent.downloadSpeed)
    console.log('progress: ' + torrent.progress)
    this.velocidad_descarga=torrent.downloadSpeed;
    this.progreso = torrent.progress;
  })
  torrent.on('ready',function(){
  })
  // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
  file.renderTo('video#TorrPlayer')
})
  }
}
=======

  // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
  file.appendTo('video#player')
})

  }

}
>>>>>>> 8d00eb36a605bc7b75b322bffb56ad6560d0aa0d
