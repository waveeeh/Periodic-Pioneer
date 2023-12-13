import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  goToHydrogenPage() {
    this.router.navigate(['/hydrogen']);
  }

  goToHeliumPage() {
    this.router.navigate(['/helium']);
  }

  goToLithiumPage() {
    this.router.navigate(['/lithium']);
  }

  goToBerylliumPage() {
    this.router.navigate(['/beryllium']);
  }

  goToBoronPage() {
    this.router.navigate(['/boron']);
  }

  goToCarbonPage() {
    this.router.navigate(['/carbon']);
  }

  goToNitrogenPage() {
    this.router.navigate(['/nitrogen']);
  }

  goToOxygenPage() {
    this.router.navigate(['/oxygen']);
  }

  goToFluorinePage() {
    this.router.navigate(['/fluorine']);
  }

  goToNeonPage() {
    this.router.navigate(['/neon']);
  }

  goToSodiumPage() {
    this.router.navigate(['/sodium']);
  }

  goToMagnesiumPage() {
    this.router.navigate(['/magnesium']);
  }

  goToAluminumPage() {
    this.router.navigate(['/aluminum']);
  }

  goToSiliconPage() {
    this.router.navigate(['/silicon']);
  }

  goToPhosphorusPage() {
    this.router.navigate(['/phosphorus']);
  }

  goToSulfurPage() {
    this.router.navigate(['/sulfur']);
  }

  goToChlorinePage() {
    this.router.navigate(['/chlorine']);
  }

  goToArgonPage() {
    this.router.navigate(['/argon']);
  }

  goToPotassiumPage() {
    this.router.navigate(['/potassium']);
  }

  goToCalciumPage() {
    this.router.navigate(['/calcium']);
  }

  goToScandiumPage() {
    this.router.navigate(['/scandium']);
  }

  goToTitaniumPage() {
    this.router.navigate(['/titanium']);
  }
  
  goToVanadiumPage() {
    this.router.navigate(['/vanadium']);
  }

  goToChromiumPage() {
    this.router.navigate(['/chromium']);
  }

  goToManganesePage() {
    this.router.navigate(['/manganese']);
  }

  goToIronPage() {
    this.router.navigate(['/iron']);
  }

  goToCobaltPage() {
    this.router.navigate(['/cobalt']);
  }

  goToNickelPage() {
    this.router.navigate(['/nickel']);
  }

  goToCopperPage() {
    this.router.navigate(['/copper']);
  }

  goToZincPage() {
    this.router.navigate(['/zinc']);
  }

  goToGalliumPage() {
    this.router.navigate(['/gallium']);
  }

  goToGermaniumPage() {
    this.router.navigate(['/germanium']);
  }

  goToArsenicPage() {
    this.router.navigate(['/arsenic']);
  }

  goToSeleniumPage() {
    this.router.navigate(['/selenium']);
  }

  goToBrominePage() {
    this.router.navigate(['/bromine']);
  }

  goToKryptonPage() {
    this.router.navigate(['/krypton']);
  }

  goToRubidiumPage() {
    this.router.navigate(['/rubidium']);
  }

  goToStrontiumPage() {
    this.router.navigate(['/strontium']);
  }

  goToYttriumPage() {
    this.router.navigate(['/yttrium']);
  }

  goToZirconiumPage() {
    this.router.navigate(['/zirconium']);
  }

  goToNiobiumPage() {
    this.router.navigate(['/niobium']);
  }

  goToMolybdenumPage() {
    this.router.navigate(['/molybdenum']);
  }

  goToTechnetiumPage() {
    this.router.navigate(['/technetium']);
  }

  goToRhodiumPage() {
    this.router.navigate(['/rhodium']);
  }

  goToRutheniumPage() {
    this.router.navigate(['/ruthenium']);
  }

  goToPalladiumPage() {
    this.router.navigate(['/palladium']);
  }

  goToSilverPage() {
    this.router.navigate(['/silver']);
  }

  goToCadmiumPage() {
    this.router.navigate(['/cadmium']);
  }

  goToIndiumPage() {
    this.router.navigate(['/indium']);
  }

  goToTinPage() {
    this.router.navigate(['/tin']);
  }
}