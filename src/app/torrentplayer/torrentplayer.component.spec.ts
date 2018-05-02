import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorrentplayerComponent } from './torrentplayer.component';

describe('TorrentplayerComponent', () => {
  let component: TorrentplayerComponent;
  let fixture: ComponentFixture<TorrentplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorrentplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorrentplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
