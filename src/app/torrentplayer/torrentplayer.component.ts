import { Component, OnInit } from '@angular/core';
import {WebTorrent} from 'webtorrent';
import { Router, ActivatedRoute } from '@angular/router';
import { Torrent } from 'parse-torrent-file';
@Component({
  selector: 'app-torrentplayer',
  templateUrl: './torrentplayer.component.html',
  styleUrls: ['./torrentplayer.component.css']
})
export class TorrentplayerComponent implements OnInit {
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
  // Torrents can contain many files. Let's use the .mp4 file
  var file = torrent.files.find(function (file) {
    return file.name.endsWith('.mp4')
  })
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