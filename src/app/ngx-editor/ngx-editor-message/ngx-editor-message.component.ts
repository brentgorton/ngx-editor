import { Component, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MessageService } from '../common/services/message.service';

@Component({
  selector: 'app-ngx-editor-message',
  templateUrl: './ngx-editor-message.component.html',
  styleUrls: ['./ngx-editor-message.component.scss'],
})

export class NgxEditorMessageComponent {
  /** property that holds the message to be displayed on the editor */
  ngxMessage = undefined;

  /**
   * @param _messageService service to send message to the editor
   */
  constructor(private _messageService: MessageService, private sanitizer: DomSanitizer) {
    this._messageService.getMessage().subscribe((message: string) => {
      this.ngxMessage = message;
    });
  }

  /**
   * clears editor message
   */
  clearMessage(): void {
    this.ngxMessage = undefined;
  }
}

@Pipe({name: 'safeHtml'})
export class SafeHtml implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(value);
    // return this.sanitizer.bypassSecurityTrustStyle(style);
    // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
  }
}
