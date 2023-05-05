import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartoonModel } from '../models/cartoon.model';

@Component({
  selector: 'app-list-cartoons',
  templateUrl: './list-cartoons.component.html',
  styleUrls: ['./list-cartoons.component.css']
})
export class ListCartoonsComponent implements OnInit {
  listCartoons: CartoonModel[] = []
  dataFiltered: CartoonModel[] = []
  numRecords: number = 0;
  showModal: boolean = false;
  fieldFilter: string = "";
  value: string = ""
  values: any = [
    { campo: "rating", value: "TV-Y" },
    { campo: "rating", value: "TV-Y7" },
    { campo: "rating", value: "TV-Y7-FV" },
    { campo: "rating", value: "TV-G" },
    { campo: "rating", value: "TV-PG" },

    { campo: "duracion", value: 11 },
    { campo: "duracion", value: 15 },
    { campo: "duracion", value: 22 },
    { campo: "duracion", value: 23 },
    { campo: "duracion", value: 30 },

    { campo: "episodios", value: 77 },
    { campo: "episodios", value: 1131 },
    { campo: "episodios", value: 225 },
    { campo: "episodios", value: 50 },
    { campo: "episodios", value: 67 },
  ]
  valuesFilter: any = []
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getValues()
  }
  /**
   * Obtiene los registros de la api
   * @description Obtiene los registros de la api y los asigna a la variable listCartoons
   */

  getValues() {
    this.apiService.getRecordList().subscribe({
      next: (data) => {
        this.listCartoons = data
        this.dataFiltered = this.listCartoons
        this.numRecords = this.listCartoons.length
        console.log(data)
      },
      error: (err) => {
        alert("Error obteniendo los registros")
      }
    })
  }

  /**
   * Filtra los registros por año
   * @param event evento del input
   */

  filterYear(event: any) {
    const value = event.target.value
    if (value != "") {
      this.dataFiltered = this.listCartoons.filter((item) => {
        return item.year == parseInt(value)
      })
      this.numRecords = this.dataFiltered.length
    } else {
      this.dataFiltered = this.listCartoons
    }
  }
  /**
   * @description Filtra los registros por rating, duracion o episodios
   */
  filter() {
    switch (this.fieldFilter) {
      case "rating":
        this.dataFiltered = this.dataFiltered.filter((item) => {
          return item.rating == this.value
        }
        )
        break;
      case "duracion":
        this.dataFiltered = this.dataFiltered.filter((item) => {
          return item.runtime_in_minutes == parseInt(this.value)
        }
        )
        break;
      case "episodios":
        this.dataFiltered = this.dataFiltered.filter((item) => {
          return item.episodes == parseInt(this.value)
        }
        )
        break;
      default:
        this.dataFiltered = this.listCartoons
        break;
    }
    this.numRecords = this.dataFiltered.length
    this.closeModal()

  }

  /**
   * @description Abre el modal para filtrar los registros
   */
  openModal() {
    console.log("abrir modal")
    this.showModal = true
    document.body.classList.add('modal-open');
  }
  /**
   * @description Cierra el modal para filtrar los registros
   */

  closeModal() {
    this.showModal = false
    document.body.classList.remove('modal-open');
  }

  /**
   * obtiene el campo seleccionado y filtra los valores
   * @param event evento del select
   */

  onFieldSelected(event: any) {
    const value = event.target.value
    this.fieldFilter = value
    this.valuesFilter = this.values.filter((item: any) => {
      return item.campo == value
    })
  }
  /**
   * guarda el valor seleccionado
   * @param event evento del select
   */
  onValueSelected(event: any) {
    this.value = event.target.value
  }





}
