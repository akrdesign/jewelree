import { Plane, Transform } from 'ogl'
import map from 'lodash/map'

import Media from './Media'

export default class {
  constructor ({ gl, scene, sizes }) {
    this.gl = gl
    this.group = new Transform()

    this.sizes = sizes

    this.mediasElement = document.querySelectorAll('.home__gallery__media__image')

    this.createGeometry()
    this.createGallery()

    this.group.setParent(scene)
  }

  createGeometry () {
    this.geometry = new Plane(this.gl)
  }

  createGallery () {
    this.medias = map(this.mediasElement, (element, index) => {
      return new Media({
        element,
        geometry: this.geometry,
        index,
        gl: this.gl,
        group: this.group,
        sizes: this.sizes
      })
    })
  }

  onResize (event) {
    map(this.medias, media => media.onResize(event))
  }
}