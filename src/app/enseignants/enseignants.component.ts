import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../models/enseignant.model';
import { EnseignantService } from '../services/enseignant.service';

@Component({
  selector: 'app-enseignants',
  standalone: true,
  imports: [],
  templateUrl: './enseignants.component.html',
  styleUrl: './enseignants.component.css'
})
export class EnseignantsComponent {
  enseignants: Enseignant[] = [];
  newEnseignant: Enseignant = { id: 0, nom: '', prenom: '', tel: '', email: '', numero_matricule: '' }; // Empty enseignant object for creating new enseignant
  isEditing = false;
  editedEnseignant: Enseignant | null = null;

  constructor(private enseignantService: EnseignantService) {}

  ngOnInit(): void {
    this.loadEnseignants();
  }

  loadEnseignants(): void {
    this.enseignantService.getEnseignants().subscribe(enseignants => {
      this.enseignants = enseignants;
    });
  }


  saveEnseignant(): void {
    if (this.editedEnseignant) {
      this.enseignantService.updateEnseignant(this.editedEnseignant).subscribe(() => {
        this.isEditing = false;
        this.loadEnseignants();
      });
    }
  }

  deleteEnseignant(enseignant: Enseignant): void {
    this.enseignantService.deleteEnseignant(enseignant.id).subscribe(() => {
      this.loadEnseignants();
    });
  }

  createEnseignant(): void {
    this.enseignantService.createEnseignant(this.newEnseignant).subscribe(() => {
      this.loadEnseignants();
      this.newEnseignant = { id: 0, nom: '', prenom: '', tel: '', email: '', numero_matricule: '' };
    });
  }



}

