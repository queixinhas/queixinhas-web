define([
  'underscore',
  'backbone'
],
function(_, Backbone) {
  return Backbone.Model.extend({
    defaults: {
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula odio, dictum ac tristique et, rhoncus et nunc. Nam ornare aliquam hendrerit. Nullam quis odio tellus, at luctus libero. Suspendisse aliquet rutrum imperdiet. Curabitur quis ligula vel purus congue dapibus. Curabitur ornare imperdiet pellentesque. Pellentesque blandit blandit felis vitae aliquam. Fusce eget magna nibh, sed volutpat quam. Nullam at porta mauris. Phasellus malesuada ullamcorper tincidunt. Maecenas pharetra metus sit amet eros accumsan sed vulputate nunc rutrum. Phasellus ornare, eros nec luctus gravida, odio dolor scelerisque enim, id rhoncus dui lectus eget sapien. Integer eget dui quis felis laoreet aliquet non nec tellus. Sed pulvinar, lectus at malesuada blandit, felis libero porttitor est, eu tempus urna lacus in turpis. Curabitur posuere lorem lectus, eu porttitor massa. Duis id erat ipsum, eu condimentum tortor. Donec ultrices, elit vel convallis auctor, nisi nunc sagittis libero, eu malesuada ante ipsum in mi. Nunc ac sem nisl. Nulla orci lectus, venenatis non vestibulum nec, imperdiet at ligula. Quisque feugiat auctor felis et interdum. Cras cursus molestie mattis. Fusce suscipit massa at odio malesuada nec lacinia nunc venenatis. Duis vehicula velit at velit tincidunt eu faucibus leo venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas hendrerit lacus vitae leo consequat aliquet. Vivamus vel mi eu augue sagittis iaculis eget eget dolor. Maecenas urna elit, lobortis id pulvinar in, viverra in enim. Sed nec neque in risus congue vulputate. Praesent ullamcorper fermentum ligula, vitae scelerisque lorem vehicula sit amet. Etiam dictum vulputate lorem eu convallis. Nunc suscipit, libero a vulputate tempor, justo ipsum pellentesque mauris, ac accumsan metus augue et dolor. Nullam convallis lacus pharetra nibh fermentum ut dictum elit varius. Mauris feugiat sapien vel nulla consequat cursus. Curabitur libero felis, sagittis quis euismod vel, tincidunt vitae eros. Sed vel nisi eu metus gravida tempus. Maecenas luctus est vitae purus commodo sit amet interdum ipsum feugiat. Phasellus est justo, pretium eget pulvinar nec, scelerisque sed augue. Cras dignissim interdum risus, sit amet porttitor leo tincidunt a. Duis ut risus quis justo suscipit convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum pretium tincidunt lorem a placerat. Nulla tincidunt elit sed ipsum euismod et tempor lacus eleifend. Duis pellentesque consequat dui, quis ultrices nunc interdum id. Integer vel nibh non magna ultrices varius. Aliquam non odio et ipsum ullamcorper consequat. Mauris cursus sapien et sapien varius auctor. Vivamus vel sapien enim, adipiscing euismod elit. Maecenas sagittis lacus rutrum turpis fringilla a feugiat ipsum pharetra. Pellentesque et erat ac nisi cursus malesuada et nec neque. Vivamus lacus mauris, pulvinar vel congue nec, aliquam nec augue. Morbi tristique metus vitae turpis tempor vel lacinia ipsum ornare. Etiam euismod ipsum quam, a cursus enim. Etiam tempor imperdiet nunc non suscipit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus libero purus, luctus id suscipit eu, semper at sem. Phasellus quis lorem ac leo scelerisque egestas. Aenean consequat aliquam sapien sed ullamcorper. Ut tincidunt augue nec nulla dignissim ut faucibus mauris auctor. Phasellus purus leo, varius non ornare ornare, mattis id libero. Nulla in aliquet risus. Nunc quis risus non odio convallis tincidunt. Cras quis tortor et arcu porta rhoncus eu non lectus. ",
      latitude: "0.0",
      longitude: "0.0",
      address: " Dwudziestego Pierwszego Praskiego Pułku Piechoty imienia Dzieci Warszawy",
      date: "25-Dec-2012 00:00:00"
    },

    // url: function() {
    //
    // },

    // parse : function(res) {
    //   return res.data;
    // },

    initialize: function(options) {
      return this;
    }
  });
});
