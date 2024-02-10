import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Storage, getDownloadURL, listAll, ref } from '@angular/fire/storage';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {
  files: { fileName: string, fileUrl: string }[] = [];
  storage = inject(Storage);
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const listRef = ref(this.storage, '');
    listAll(listRef)
      .then((result: { items: any[]; }) => {
        result.items.forEach(async itemRef => {
          const url = await getDownloadURL(itemRef);
          this.files.push({ fileName: itemRef.name, fileUrl: url });
        });
        console.log("Files:", this.files);
      })
      .catch((error: any) => {
        console.log("Error:", error);
      })
  }

}